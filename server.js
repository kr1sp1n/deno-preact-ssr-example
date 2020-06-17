import { readJsonSync } from "https://deno.land/std/fs/mod.ts";
import { listenAndServe } from "https://deno.land/std/http/mod.ts";

const port = 8000;
const options = { port };

const data = readJsonSync("./data.json");

const body = `export default function data () {
  return ${JSON.stringify(data)}
}`;

listenAndServe(options, (req) => {
  req.respond({ body });
});
