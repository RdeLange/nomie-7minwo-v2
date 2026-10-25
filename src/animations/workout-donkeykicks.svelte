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
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 290" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="donkeykicks-1"><path d="M292 178L292 218" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M292 218L292 256" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 178L100 150" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M100 150L48 120" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="56" cy="120" rx="16" ry="7" fill="#2b2b2b" /><path d="M292 178L150 178" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 178L150 250" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 250L105 252" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="113" cy="252" rx="16" ry="7" fill="#2b2b2b" /><path d="M292 178L270 218" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M270 218L270 256" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="318" cy="150" r="25" fill="var(--flesh)" /><path d="M293 148a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
    <g id="donkeykicks-2"><path d="M292 178L292 218" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M292 218L292 256" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 178L150 250" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 250L105 252" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="113" cy="252" rx="16" ry="7" fill="#2b2b2b" /><path d="M292 178L150 178" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 178L150 250" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M150 250L105 252" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="113" cy="252" rx="16" ry="7" fill="#2b2b2b" /><path d="M292 178L270 218" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M270 218L270 256" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="318" cy="150" r="25" fill="var(--flesh)" /><path d="M293 148a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
  </g>
</g>
<text x="8" y="282" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
