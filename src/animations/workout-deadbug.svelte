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
    @keyframes deadbug-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #deadbug-1 { animation-name: deadbug-1; }
    @keyframes deadbug-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #deadbug-2 { animation-name: deadbug-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 290" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="deadbug-1"><path d="M140 245L140 182" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M140 182L150 128" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M230 245L232 160" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M232 160L238 82" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="246" cy="82" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 245L230 245" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M230 245L232 160" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M232 160L238 82" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="246" cy="82" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 245L120 190" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M120 190L112 140" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="105" cy="238" r="25" fill="var(--flesh)" /><path d="M80 236a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
    <g id="deadbug-2"><path d="M140 245L110 262" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M110 262L88 262" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M230 245L300 262" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 262L362 262" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="370" cy="262" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 245L230 245" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M230 245L300 262" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 262L362 262" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="370" cy="262" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 245L120 262" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M120 262L96 262" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="105" cy="238" r="25" fill="var(--flesh)" /><path d="M80 236a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
  </g>
</g>
<text x="8" y="282" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
