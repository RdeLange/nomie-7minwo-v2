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
    @keyframes highknees-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #highknees-1 { animation-name: highknees-1; }
    @keyframes highknees-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #highknees-2 { animation-name: highknees-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 540" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="highknees-1"><path d="M130 128L168 190" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M168 190L182 232" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 270L185 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M185 300L182 392" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="190" cy="392" rx="16" ry="7" fill="#2b2b2b" /><path d="M130 100L130 270" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 270L122 395" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M122 395L118 500" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="126" cy="500" rx="16" ry="7" fill="#2b2b2b" /><path d="M130 128L100 190" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M100 190L94 228" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="130" cy="70" r="25" fill="var(--flesh)" /><path d="M105 68a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
    <g id="highknees-2"><path d="M130 128L168 190" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M168 190L182 232" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 270L122 395" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M122 395L118 500" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="126" cy="500" rx="16" ry="7" fill="#2b2b2b" /><path d="M130 100L130 270" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 270L185 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M185 300L182 392" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="190" cy="392" rx="16" ry="7" fill="#2b2b2b" /><path d="M130 128L100 190" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M100 190L94 228" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="130" cy="70" r="25" fill="var(--flesh)" /><path d="M105 68a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
  </g>
</g>
<text x="8" y="532" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
