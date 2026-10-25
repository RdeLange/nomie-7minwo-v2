<script lang="ts">
    export let direction = "right";
    export let isPaused = false;
    export let rootElement;
    let flipsvg = false;

    if (direction == "left") {
      flipsvg = true;
    }
</script>

<style lang="scss">
  * {
    .shapes > * {
      opacity: 0;
      animation-duration: 1.2s;
      animation-iteration-count: infinite;
      animation-timing-function: steps(1);
    }
    @keyframes donkeykicks-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #donkeykicks-1 { animation-name: donkeykicks-1; }
    @keyframes donkeykicks-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #donkeykicks-2 { animation-name: donkeykicks-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="donkeykicks-1"><g class="far"><g transform="translate(248.0 190.0) rotate(12.3)"><path d="M-11 -3C-13 10-11 26-9 39C-8 45-4 47 0 47C4 47 8 45 9 39C11 26 13 10 11 -3C7 -7-7-7-11-3Z" fill="var(--shirt)" /></g><g transform="translate(238.2 235.0) rotate(3.4)"><path d="M-8 -2C-10 12-9 27-7 37C-6 41-3 42 0 42C3 42 6 41 7 37C9 27 10 12 8 -2C4 -5-4-5-8 -2Z" fill="var(--flesh)" /></g><g transform="translate(235.7 276.9) rotate(3.4)"><path d="M-7 -2C-10 6-10 14-7 19C-4 23-1 24 1 23C5 22 8 19 8 14C8 8 8 3 7 -2C3 -4-3-4-7 -2Z" fill="var(--flesh)" /></g><g transform="translate(120.0 190.0) rotate(145.0)"><path d="M-16 -4C-19 16-19 48-16 68C-15 74-12 78 0 78C12 78 15 74 16 68C19 48 19 16 16 -4C8 -8-8-8-16 -4Z" fill="var(--pants)" /></g><g transform="translate(75.3 126.1) rotate(113.0)"><path d="M-13 -3C-14 12-13 24-11 36C-10 48-9 58-8 66C-7 70-4 72 0 72C4 72 8 70 8 66C9 56 10 46 10 36C11 24 12 12 12 -3C6 -6-6-6-13 -3Z" fill="var(--pants)" /></g><g transform="translate(9.0 98.0) rotate(0.0)"><path d="M-7 -5C-9 2-10 7-7 9L22 9C28 9 31 7 31 3C31 -1 28 -3 22 -4C16 -5 10 -5 4 -6C0 -6-4-6-7 -5Z" fill="#2b2b2b" /></g></g><g transform="translate(248.0 190.0) rotate(90.0)"><path d="M-22 2C-26-6-12-10 0-10C13-10 27-6 25 4C23 22 17 40 16 56C15 68 19 78 16 84C6 88-6 88-16 84C-19 72-22 56-22 40C-22 26-22 12-22 2Z" fill="var(--shirt)" /></g><g transform="translate(248.0 190.0) rotate(90.0)"><path d="M-8-4C-9-16-8-26-7-32L7-32C8-26 9-16 8-4C4 -2-4-2-8-4Z" fill="var(--flesh)" /></g><g transform="translate(120.0 190.0) rotate(0.0)"><path d="M-16 -4C-19 16-19 48-16 68C-15 74-12 78 0 78C12 78 15 74 16 68C19 48 19 16 16 -4C8 -8-8-8-16 -4Z" fill="var(--pants)" /></g><g transform="translate(120.0 268.0) rotate(90.0)"><path d="M-13 -3C-14 12-13 24-11 36C-10 48-9 58-8 66C-7 70-4 72 0 72C4 72 8 70 8 66C9 56 10 46 10 36C11 24 12 12 12 -3C6 -6-6-6-13 -3Z" fill="var(--pants)" /></g><g transform="translate(48.0 268.0) rotate(0.0)"><path d="M-7 -5C-9 2-10 7-7 9L22 9C28 9 31 7 31 3C31 -1 28 -3 22 -4C16 -5 10 -5 4 -6C0 -6-4-6-7 -5Z" fill="#2b2b2b" /></g><g transform="translate(280.9 167.3) rotate(55.4)"><path d="M0-26C13-26 22-16 22 0C22 13 15 25 3 26C-6 27-12 24-16 20C-19 17-20 14-19 10C-21 6-21 2-19-2C-20-14-12-26 0-26Z" fill="var(--flesh)" /><path d="M-21 -1C-25-19-9-31 5-26C13-23 17-17 17-11C8-16 0-14-6-9C-12-4-17 0-21 -1Z" fill="var(--hair)" /><circle cx="11" cy="-1" r="2.6" fill="#2b2b2b" /></g><g transform="translate(248.0 190.0) rotate(-4.6)"><path d="M-11 -3C-13 10-11 26-9 39C-8 45-4 47 0 47C4 47 8 45 9 39C11 26 13 10 11 -3C7 -7-7-7-11-3Z" fill="var(--shirt)" /></g><g transform="translate(251.7 235.9) rotate(-0.5)"><path d="M-8 -2C-10 12-9 27-7 37C-6 41-3 42 0 42C3 42 6 41 7 37C9 27 10 12 8 -2C4 -5-4-5-8 -2Z" fill="var(--flesh)" /></g><g transform="translate(252.1 277.9) rotate(-0.5)"><path d="M-7 -2C-10 6-10 14-7 19C-4 23-1 24 1 23C5 22 8 19 8 14C8 8 8 3 7 -2C3 -4-3-4-7 -2Z" fill="var(--flesh)" /></g></g>
    <g id="donkeykicks-2"><g class="far"><g transform="translate(248.0 190.0) rotate(12.3)"><path d="M-11 -3C-13 10-11 26-9 39C-8 45-4 47 0 47C4 47 8 45 9 39C11 26 13 10 11 -3C7 -7-7-7-11-3Z" fill="var(--shirt)" /></g><g transform="translate(238.2 235.0) rotate(3.4)"><path d="M-8 -2C-10 12-9 27-7 37C-6 41-3 42 0 42C3 42 6 41 7 37C9 27 10 12 8 -2C4 -5-4-5-8 -2Z" fill="var(--flesh)" /></g><g transform="translate(235.7 276.9) rotate(3.4)"><path d="M-7 -2C-10 6-10 14-7 19C-4 23-1 24 1 23C5 22 8 19 8 14C8 8 8 3 7 -2C3 -4-3-4-7 -2Z" fill="var(--flesh)" /></g><g transform="translate(120.0 190.0) rotate(-9.5)"><path d="M-16 -4C-19 16-19 48-16 68C-15 74-12 78 0 78C12 78 15 74 16 68C19 48 19 16 16 -4C8 -8-8-8-16 -4Z" fill="var(--pants)" /></g><g transform="translate(132.8 266.9) rotate(88.3)"><path d="M-13 -3C-14 12-13 24-11 36C-10 48-9 58-8 66C-7 70-4 72 0 72C4 72 8 70 8 66C9 56 10 46 10 36C11 24 12 12 12 -3C6 -6-6-6-13 -3Z" fill="var(--pants)" /></g><g transform="translate(60.9 269.0) rotate(0.0)"><path d="M-7 -5C-9 2-10 7-7 9L22 9C28 9 31 7 31 3C31 -1 28 -3 22 -4C16 -5 10 -5 4 -6C0 -6-4-6-7 -5Z" fill="#2b2b2b" /></g></g><g transform="translate(248.0 190.0) rotate(90.0)"><path d="M-22 2C-26-6-12-10 0-10C13-10 27-6 25 4C23 22 17 40 16 56C15 68 19 78 16 84C6 88-6 88-16 84C-19 72-22 56-22 40C-22 26-22 12-22 2Z" fill="var(--shirt)" /></g><g transform="translate(248.0 190.0) rotate(90.0)"><path d="M-8-4C-9-16-8-26-7-32L7-32C8-26 9-16 8-4C4 -2-4-2-8-4Z" fill="var(--flesh)" /></g><g transform="translate(120.0 190.0) rotate(0.0)"><path d="M-16 -4C-19 16-19 48-16 68C-15 74-12 78 0 78C12 78 15 74 16 68C19 48 19 16 16 -4C8 -8-8-8-16 -4Z" fill="var(--pants)" /></g><g transform="translate(120.0 268.0) rotate(90.0)"><path d="M-13 -3C-14 12-13 24-11 36C-10 48-9 58-8 66C-7 70-4 72 0 72C4 72 8 70 8 66C9 56 10 46 10 36C11 24 12 12 12 -3C6 -6-6-6-13 -3Z" fill="var(--pants)" /></g><g transform="translate(48.0 268.0) rotate(0.0)"><path d="M-7 -5C-9 2-10 7-7 9L22 9C28 9 31 7 31 3C31 -1 28 -3 22 -4C16 -5 10 -5 4 -6C0 -6-4-6-7 -5Z" fill="#2b2b2b" /></g><g transform="translate(280.9 167.3) rotate(55.4)"><path d="M0-26C13-26 22-16 22 0C22 13 15 25 3 26C-6 27-12 24-16 20C-19 17-20 14-19 10C-21 6-21 2-19-2C-20-14-12-26 0-26Z" fill="var(--flesh)" /><path d="M-21 -1C-25-19-9-31 5-26C13-23 17-17 17-11C8-16 0-14-6-9C-12-4-17 0-21 -1Z" fill="var(--hair)" /><circle cx="11" cy="-1" r="2.6" fill="#2b2b2b" /></g><g transform="translate(248.0 190.0) rotate(-4.6)"><path d="M-11 -3C-13 10-11 26-9 39C-8 45-4 47 0 47C4 47 8 45 9 39C11 26 13 10 11 -3C7 -7-7-7-11-3Z" fill="var(--shirt)" /></g><g transform="translate(251.7 235.9) rotate(-0.5)"><path d="M-8 -2C-10 12-9 27-7 37C-6 41-3 42 0 42C3 42 6 41 7 37C9 27 10 12 8 -2C4 -5-4-5-8 -2Z" fill="var(--flesh)" /></g><g transform="translate(252.1 277.9) rotate(-0.5)"><path d="M-7 -2C-10 6-10 14-7 19C-4 23-1 24 1 23C5 22 8 19 8 14C8 8 8 3 7 -2C3 -4-3-4-7 -2Z" fill="var(--flesh)" /></g></g>
  </g>
</g>
<text x="8" y="312" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
