import { compile, preprocess } from 'svelte/compiler'
import fs from 'node:fs'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
const src = fs.readFileSync(process.argv[2], 'utf8')
const pre = await preprocess(src, vitePreprocess(), { filename: process.argv[2] })
const out = compile(pre.code, { filename: 'x.svelte', css: 'external' })
const css = out.css?.code ?? ''
console.log('css length', css.length, 'has keyframes', /@keyframes/.test(css), 'has shapes', /shapes/.test(css))
console.log(css.slice(0, 300))
