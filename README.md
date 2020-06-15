# deno-preact-ssr-example

Use deno as a static site generator by rendering preact to a string.
The data is delivered by the server as ES Module and fetched by the client in order to pass it to the preact app.

1. Start server on port 8000:

    ```bash
    deno run --allow-net --allow-read --unstable server.js
    ```

2. Render html:

    ```bash
    deno run client.jsx > index.html
    ```

3. Open the `index.html` with any browser.