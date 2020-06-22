import { readJsonSync, listenAndServe, path } from "./deps.js";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const port = 8000;
const options = { port };

const data = readJsonSync(`${__dirname}/../data.json`);

const body = `export default function data () {
  return ${JSON.stringify(data)}
}`;

listenAndServe(options, (req) => {
  req.respond({ body });
});

console.log(`Listening on ${port}`);
