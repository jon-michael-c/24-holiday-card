import lotties from "../assets/lotties.json";

export default class Loader {
  constructor() {
    this.lotties = JSON.parse(JSON.stringify(lotties));
    this.totalFiles = 0;
    this.loadedFiles = 0;
  }

  async fetchWithProgress(url, onProgress) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentLength = response.headers.get("content-length");
    if (!contentLength) {
      console.warn("Unable to calculate progress for:", url);
      return await response.json();
    }

    const totalBytes = parseInt(contentLength, 10);
    let loadedBytes = 0;
    const reader = response.body.getReader();

    const stream = new ReadableStream({
      start(controller) {
        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              loadedBytes += value.length;
              onProgress(loadedBytes, totalBytes);
              controller.enqueue(value);
              read();
            })
            .catch((error) => {
              console.error("Error reading stream:", error);
              controller.error(error);
            });
        }
        read();
      },
    });

    const responseBody = new Response(stream);
    return responseBody.json();
  }

  async loadAll(onProgress) {
    const pathObjects = [];
    this.collectPathObjects(this.lotties, pathObjects);

    this.totalFiles = pathObjects.length;
    this.loadedFiles = 0;

    const promises = pathObjects.map(async (objWithPath) => {
      const path = objWithPath.path;
      let fileLoadedBytes = 0;
      let fileTotalBytes = 0;

      const data = await this.fetchWithProgress(path, (loaded, total) => {
        fileLoadedBytes = loaded;
        fileTotalBytes = total;

        // Fractional progress for this single file:
        const singleFileFraction = loaded / total; // from 0 to 1

        // Overall fraction of lotties: (loadedFiles completed + fraction of current one) / totalFiles
        const lottieFraction =
          (this.loadedFiles + singleFileFraction) / this.totalFiles;

        // Convert lottie fraction to overall progress (80% max):
        const overallProgress = lottieFraction * 80;

        if (onProgress) {
          onProgress(overallProgress);
        }
      });

      // Replace 'path' key with 'data'
      delete objWithPath.path;
      objWithPath.data = data;

      this.loadedFiles += 1;

      // Once a file fully loads, update progress again:
      const lottieFraction = this.loadedFiles / this.totalFiles;
      const overallProgress = lottieFraction * 80;

      if (onProgress) {
        onProgress(overallProgress);
      }
    });

    await Promise.all(promises);

    // At this point, all lotties are loaded and we are at 80%.
    // The remaining 20% is for audio loading, handled elsewhere.
    // Once audio is fully loaded, that part of the system should call onProgress(100).

    return this.lotties;
  }

  collectPathObjects(obj, pathObjects) {
    if (Array.isArray(obj)) {
      obj.forEach((item) => this.collectPathObjects(item, pathObjects));
    } else if (typeof obj === "object" && obj !== null) {
      if ("path" in obj && typeof obj.path === "string") {
        pathObjects.push(obj);
      } else {
        for (const key in obj) {
          this.collectPathObjects(obj[key], pathObjects);
        }
      }
    }
  }

  async loadAudioFully(url) {
    // Fetch entire audio file
    const arrayBuffer = await this.fetchAudio(url);

    // Create object URL from the fully downloaded file
    const audioURL = await this.createAudioObjectURL(arrayBuffer);

    // Create an Audio element and set its src
    const audio = new Audio();
    audio.src = audioURL;
    audio.preload = "auto";

    // Wait for the audio to be fully ready
    await this.waitForCanPlayThrough(audio);

    // Now audio is fully loaded and can play through without buffering
    return audio; // You can store or play this audio as you wish
  }

  async fetchAudio(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
  }

  async createAudioObjectURL(arrayBuffer, mimeType = "audio/mpeg") {
    const blob = new Blob([arrayBuffer], { type: mimeType });
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  }
  waitForCanPlayThrough(audio) {
    return new Promise((resolve, reject) => {
      // If there's an error loading the audio, reject
      audio.onerror = () => reject(new Error("Error loading audio."));

      // When canplaythrough fires, the audio is fully loaded and playable
      audio.oncanplaythrough = () => {
        audio.oncanplaythrough = null;
        resolve();
      };

      // Force loading
      audio.load();
    });
  }
}
