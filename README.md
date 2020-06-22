# deno-preact-ssr-example

Use deno as a static site generator by rendering preact app to a string.
The data is delivered by the server as ES Module and fetched in `render.js` in order to pass it to the preact app as props.
Furthermore `htm` is used as alternative to JSX and `jss` is used as CSS-in-JS framework.

1. Start server on port 8000:

    ```bash
    deno run --allow-net --allow-read --unstable src/server.js
    ```

2. Render html pages to `dist` dir:

    ```bash
    deno run --unstable --allow-read --allow-write src/render.js
    ```

3. Open the `dist/index.html` with any browser.

4. Change `data.json` and render again by reloading only `http://localhost:8000/data.js`:

    ```bash
    deno run --unstable --allow-read --allow-write --reload=http://localhost:8000/data.js src/render.js
    ```