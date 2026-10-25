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
    @keyframes birddog-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #birddog-1 { animation-name: birddog-1; }
    @keyframes birddog-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #birddog-2 { animation-name: birddog-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="birddog-1"><g class="far"><path d="M229.9 179.1L227.8 225.3L244.2 226.7L250.1 180.9Z" fill="var(--flesh)" /><circle cx="240.0" cy="180.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M227.7 226.0L229.1 272.0L242.9 272.0L244.3 226.0Z" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="236.0" cy="272.0" r="6.9" fill="var(--flesh)" /><circle cx="236" cy="272" r="8.5" fill="var(--flesh)" /><path d="M100.2 182.6L114.1 241.9L141.9 238.1L139.8 177.4Z" fill="var(--pants)" /><circle cx="120.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="128.0" cy="240.0" r="14" fill="var(--pants)" /><path d="M118.1 230.1L93.6 261.6L106.4 274.4L137.9 249.9Z" fill="var(--pants)" /><circle cx="128.0" cy="240.0" r="14" fill="var(--pants)" /><circle cx="100.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="112" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M252.7 142.1L118.1 159.1L121.9 200.9L257.3 193.9Z" fill="var(--shirt)" /><circle cx="255.0" cy="168.0" r="26" fill="var(--shirt)" /><circle cx="120.0" cy="180.0" r="21" fill="var(--shirt)" /><path d="M260.0 174.2L295.0 146.2L285.0 133.8L250.0 161.8Z" fill="var(--flesh)" /><circle cx="255.0" cy="168.0" r="8" fill="var(--flesh)" /><circle cx="290.0" cy="140.0" r="8" fill="var(--flesh)" /><path d="M118.6 160.1L63.0 170.0L65.0 198.0L121.4 199.9Z" fill="var(--pants)" /><circle cx="120.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="64.0" cy="184.0" r="14" fill="var(--pants)" /><path d="M64.0 170.0L18.0 175.0L18.0 193.0L64.0 198.0Z" fill="var(--pants)" /><circle cx="64.0" cy="184.0" r="14" fill="var(--pants)" /><circle cx="18.0" cy="184.0" r="9" fill="var(--pants)" /><ellipse cx="30" cy="192" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M240.4 191.0L298.3 187.0L297.7 169.0L239.6 169.0Z" fill="var(--flesh)" /><circle cx="240.0" cy="180.0" r="11" fill="var(--flesh)" /><circle cx="298.0" cy="178.0" r="9" fill="var(--flesh)" /><path d="M298.0 187.0L352.0 185.5L352.0 170.5L298.0 169.0Z" fill="var(--flesh)" /><circle cx="298.0" cy="178.0" r="9" fill="var(--flesh)" /><circle cx="352.0" cy="178.0" r="7.5" fill="var(--flesh)" /><circle cx="352" cy="178" r="8.5" fill="var(--flesh)" /><circle cx="290" cy="140" r="23" fill="var(--flesh)" /><path d="M267 143A23 23 0 0 1 311 132C296 134 282 134 267 143Z" fill="var(--hair)" /><circle cx="299" cy="143" r="2.6" fill="#2b2b2b" /></g>
    <g id="birddog-2"><g class="far"><path d="M240.3 190.1L298.3 186.3L297.7 169.7L239.7 169.9Z" fill="var(--flesh)" /><circle cx="240.0" cy="180.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="298.0" cy="178.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M298.0 186.3L352.0 184.9L352.0 171.1L298.0 169.7Z" fill="var(--flesh)" /><circle cx="298.0" cy="178.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="352.0" cy="178.0" r="6.9" fill="var(--flesh)" /><circle cx="352" cy="178" r="8.5" fill="var(--flesh)" /><path d="M118.6 160.1L63.0 170.0L65.0 198.0L121.4 199.9Z" fill="var(--pants)" /><circle cx="120.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="64.0" cy="184.0" r="14" fill="var(--pants)" /><path d="M64.0 170.0L18.0 175.0L18.0 193.0L64.0 198.0Z" fill="var(--pants)" /><circle cx="64.0" cy="184.0" r="14" fill="var(--pants)" /><circle cx="18.0" cy="184.0" r="9" fill="var(--pants)" /><ellipse cx="30" cy="192" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M252.7 142.1L118.1 159.1L121.9 200.9L257.3 193.9Z" fill="var(--shirt)" /><circle cx="255.0" cy="168.0" r="26" fill="var(--shirt)" /><circle cx="120.0" cy="180.0" r="21" fill="var(--shirt)" /><path d="M260.0 174.2L295.0 146.2L285.0 133.8L250.0 161.8Z" fill="var(--flesh)" /><circle cx="255.0" cy="168.0" r="8" fill="var(--flesh)" /><circle cx="290.0" cy="140.0" r="8" fill="var(--flesh)" /><path d="M100.2 182.6L114.1 241.9L141.9 238.1L139.8 177.4Z" fill="var(--pants)" /><circle cx="120.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="128.0" cy="240.0" r="14" fill="var(--pants)" /><path d="M118.1 230.1L93.6 261.6L106.4 274.4L137.9 249.9Z" fill="var(--pants)" /><circle cx="128.0" cy="240.0" r="14" fill="var(--pants)" /><circle cx="100.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="112" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M229.0 179.0L227.0 225.2L245.0 226.8L251.0 181.0Z" fill="var(--flesh)" /><circle cx="240.0" cy="180.0" r="11" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="9" fill="var(--flesh)" /><path d="M227.0 226.0L228.5 272.0L243.5 272.0L245.0 226.0Z" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="9" fill="var(--flesh)" /><circle cx="236.0" cy="272.0" r="7.5" fill="var(--flesh)" /><circle cx="236" cy="272" r="8.5" fill="var(--flesh)" /><circle cx="290" cy="140" r="23" fill="var(--flesh)" /><path d="M267 143A23 23 0 0 1 311 132C296 134 282 134 267 143Z" fill="var(--hair)" /><circle cx="299" cy="143" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
