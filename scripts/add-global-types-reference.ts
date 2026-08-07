import { readFile, writeFile } from "node:fs/promises"

const globalTypesReference = '/// <reference path="../globals.d.ts" />\n'
const indexDeclaration = await readFile("dist/index.d.ts", "utf8")

await writeFile("dist/index.d.ts", `${globalTypesReference}${indexDeclaration}`)
