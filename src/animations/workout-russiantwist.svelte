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
    @keyframes russiantwist-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #russiantwist-1 { animation-name: russiantwist-1; }
    @keyframes russiantwist-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #russiantwist-2 { animation-name: russiantwist-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 330" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="russiantwist-1"><path d="M120 180L190 205" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M190 205L190 215" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M135 285L215 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M215 300L240 300" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="248" cy="300" rx="16" ry="7" fill="#2b2b2b" /><path d="M126 146L135 285" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M135 285L215 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M215 300L240 300" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="248" cy="300" rx="16" ry="7" fill="#2b2b2b" /><path d="M120 180L110 225" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M110 225L190 215" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="130" cy="118" r="25" fill="var(--flesh)" /><path d="M105 116a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
    <g id="russiantwist-2"><path d="M150 180L70 205" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M70 205L70 215" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M135 285L215 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M215 300L240 300" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="248" cy="300" rx="16" ry="7" fill="#2b2b2b" /><path d="M156 146L135 285" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M135 285L215 300" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M215 300L240 300" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="248" cy="300" rx="16" ry="7" fill="#2b2b2b" /><path d="M150 180L160 225" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M160 225L70 215" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="160" cy="118" r="25" fill="var(--flesh)" /><path d="M135 116a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
  </g>
</g>
<text x="8" y="322" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
