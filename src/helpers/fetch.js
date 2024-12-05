export async function fetchWithProgress(url, onProgress) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const contentLength = response.headers.get("content-length");

  if (!contentLength) {
    console.warn(
      "Unable to calculate progress, content-length is not provided."
    );
    return await response.text();
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
            onProgress((loadedBytes / totalBytes) * 100); // Call the progress callback

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

  // Assuming a text response by default, change to .json() if needed
  return responseBody.text();
}
