import { copyFile, mkdir } from "node:fs/promises"

await mkdir("dist", { recursive: true })
await copyFile("types/static-assets.d.ts", "dist/static-assets.d.ts")
