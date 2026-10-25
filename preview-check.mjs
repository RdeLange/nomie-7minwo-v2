import { chromium } from '/Users/ronalddelange/Library/Mobile Documents/com~apple~CloudDocs/DailyNomie/Development/dailynomie7/node_modules/playwright/index.mjs'
const fake = `window.NomiePlugin = class { constructor(d){ this.hooks = {}; window.__plugin = this; this.prefs = { theme: 'dark', fontScale: 1 }; this.store = {}; this.storage = { init: async () => {}, getItem: (k) => this.store[k], setItem: async (k, v) => { this.store[k] = JSON.parse(JSON.stringify(v)) } } } onRegistered(f){ (this.hooks.onRegistered ||= []).push(f) } onUIOpened(f){ (this.hooks.onUIOpened ||= []).push(f) } createNote(){} async confirm(){ return { value: true } } }`
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
await page.route('**/cdn.jsdelivr.net/**', (r) => r.fulfill({ status: 200, contentType: 'application/javascript', body: '' }))
await page.addInitScript(fake)
await page.goto('http://localhost:5105/', { waitUntil: 'load' })
await page.waitForTimeout(400)
await page.evaluate(() => window.__plugin.hooks.onUIOpened.forEach((f) => f()))
await page.waitForTimeout(600)
await page.getByRole('button', { name: 'Preview the workouts' }).click()
await page.getByRole('button', { name: 'highknees', exact: true }).click()
await page.waitForTimeout(700)
await page.screenshot({ path: '/private/tmp/claude-501/-Users-ronalddelange-Library-Mobile-Documents-com-apple-CloudDocs-DailyNomie-Development-dailynomie7/e81d7c71-c292-47d6-9dbd-7c34b147ea59/scratchpad/preview-page.png' })
console.log('errors', errors)
await browser.close()
