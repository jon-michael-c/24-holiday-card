// Import the lotties JSON data
import lotties from "../assets/lotties.json";

export default class Loader {
  constructor() {
    // Deep clone the lotties object to avoid mutating the original data
    this.lotties = JSON.parse(JSON.stringify(lotties));
    this.totalFiles = 0;
    this.loadedFiles = 0;
  }

  // Method to fetch a resource with progress tracking
  async fetchWithProgress(url, onProgress) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentLength = response.headers.get("content-length");

    if (!contentLength) {
      console.warn(
        "Unable to calculate progress, content-length is not provided."
      );
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
              onProgress(loadedBytes, totalBytes); // Call the progress callback

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

    // Parse the response as JSON
    return responseBody.json();
  }

  // Method to load all Lottie files from the JSON data
  async loadAll(onProgress) {
    // Collect all objects that contain a 'path' key
    const pathObjects = [];
    this.collectPathObjects(this.lotties, pathObjects);

    this.totalFiles = pathObjects.length;
    this.loadedFiles = 0;

    // Fetch each Lottie file and insert the data back into the JSON structure
    const promises = pathObjects.map(async (objWithPath) => {
      const path = objWithPath.path;
      let fileLoadedBytes = 0;
      let fileTotalBytes = 0;

      const data = await this.fetchWithProgress(path, (loaded, total) => {
        fileLoadedBytes = loaded;
        fileTotalBytes = total;

        // Update overall progress
        const overallProgress =
          ((this.loadedFiles + fileLoadedBytes / fileTotalBytes) /
            this.totalFiles) *
          100;
        if (onProgress) {
          onProgress(overallProgress);
        }
      });

      // Replace 'path' key with 'data' key containing the fetched data
      delete objWithPath.path;
      objWithPath.data = data;

      this.loadedFiles += 1;
      if (onProgress) {
        onProgress((this.loadedFiles / this.totalFiles) * 100);
      }
    });

    await Promise.all(promises);
    return this.lotties;
  }

  // Helper method to collect all objects containing a 'path' key
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
}
