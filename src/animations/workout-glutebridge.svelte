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
    @keyframes glutebridge-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #glutebridge-1 { animation-name: glutebridge-1; }
    @keyframes glutebridge-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #glutebridge-2 { animation-name: glutebridge-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 290" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="glutebridge-1"><path d="M150 238L120 258" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M120 258L95 262" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 175L385 200" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M385 200L425 255" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="433" cy="255" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 240L300 175" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 175L385 200" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M385 200L425 255" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="433" cy="255" rx="16" ry="7" fill="#2b2b2b" /><path d="M150 238L130 258" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 258L105 264" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="120" cy="232" r="25" fill="var(--flesh)" /><path d="M95 230a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
    <g id="glutebridge-2"><path d="M150 238L120 258" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M120 258L95 262" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 245L385 200" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M385 200L425 255" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="433" cy="255" rx="16" ry="7" fill="#2b2b2b" /><path d="M140 240L300 245" stroke="var(--shirt)" stroke-width="46" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M300 245L385 200" stroke="var(--pants)" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M385 200L425 255" stroke="var(--pants)" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none" /><ellipse cx="433" cy="255" rx="16" ry="7" fill="#2b2b2b" /><path d="M150 238L130 258" stroke="var(--flesh)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none" /><path d="M130 258L105 264" stroke="var(--flesh)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" /><circle cx="120" cy="232" r="25" fill="var(--flesh)" /><path d="M95 230a25 25 0 0 1 50 0c-10-8-30-9-50 0Z" fill="var(--hair)" /></g>
  </g>
</g>
<text x="8" y="282" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
