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
    @keyframes bearcrawl-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #bearcrawl-1 { animation-name: bearcrawl-1; }
    @keyframes bearcrawl-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #bearcrawl-2 { animation-name: bearcrawl-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="bearcrawl-1"><g class="far"><path d="M240.3 177.1L228.1 223.6L243.9 228.4L259.7 182.9Z" fill="var(--flesh)" /><circle cx="250.0" cy="180.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M227.9 224.2L219.3 270.5L232.7 273.5L244.1 227.8Z" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="226.0" cy="272.0" r="6.9" fill="var(--flesh)" /><circle cx="226" cy="272" r="8.5" fill="var(--flesh)" /><path d="M121.3 172.8L106.9 227.0L133.1 237.0L158.7 187.2Z" fill="var(--pants)" /><circle cx="140.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="120.0" cy="232.0" r="14" fill="var(--pants)" /><path d="M107.6 225.4L94.0 261.8L110.0 270.2L132.4 238.6Z" fill="var(--pants)" /><circle cx="120.0" cy="232.0" r="14" fill="var(--pants)" /><circle cx="102.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="114" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M260.1 142.1L138.0 159.1L142.0 200.9L265.1 193.9Z" fill="var(--shirt)" /><circle cx="262.6" cy="168.0" r="26" fill="var(--shirt)" /><circle cx="140.0" cy="180.0" r="21" fill="var(--shirt)" /><path d="M268.1 173.8L297.5 145.8L286.5 134.2L257.1 162.2Z" fill="var(--flesh)" /><circle cx="262.6" cy="168.0" r="8" fill="var(--flesh)" /><circle cx="292.0" cy="140.0" r="8" fill="var(--flesh)" /><path d="M122.5 189.8L155.8 236.8L180.2 223.2L157.5 170.2Z" fill="var(--pants)" /><circle cx="140.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="168.0" cy="230.0" r="14" fill="var(--pants)" /><path d="M154.3 227.0L151.2 264.0L168.8 268.0L181.7 233.0Z" fill="var(--pants)" /><circle cx="168.0" cy="230.0" r="14" fill="var(--pants)" /><circle cx="160.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="172" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M240.5 185.6L268.3 228.6L283.7 219.4L259.5 174.4Z" fill="var(--flesh)" /><circle cx="250.0" cy="180.0" r="11" fill="var(--flesh)" /><circle cx="276.0" cy="224.0" r="9" fill="var(--flesh)" /><path d="M267.5 226.8L284.9 274.4L299.1 269.6L284.5 221.2Z" fill="var(--flesh)" /><circle cx="276.0" cy="224.0" r="9" fill="var(--flesh)" /><circle cx="292.0" cy="272.0" r="7.5" fill="var(--flesh)" /><circle cx="292" cy="272" r="8.5" fill="var(--flesh)" /><circle cx="292" cy="140" r="23" fill="var(--flesh)" /><path d="M269 143A23 23 0 0 1 313 132C298 134 284 134 269 143Z" fill="var(--hair)" /><circle cx="301" cy="143" r="2.6" fill="#2b2b2b" /></g>
    <g id="bearcrawl-2"><g class="far"><path d="M241.3 185.1L268.9 228.2L283.1 219.8L258.7 174.9Z" fill="var(--flesh)" /><circle cx="250.0" cy="180.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="276.0" cy="224.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M268.1 226.6L285.5 274.2L298.5 269.8L283.9 221.4Z" fill="var(--flesh)" /><circle cx="276.0" cy="224.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="292.0" cy="272.0" r="6.9" fill="var(--flesh)" /><circle cx="292" cy="272" r="8.5" fill="var(--flesh)" /><path d="M122.5 189.8L155.8 236.8L180.2 223.2L157.5 170.2Z" fill="var(--pants)" /><circle cx="140.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="168.0" cy="230.0" r="14" fill="var(--pants)" /><path d="M154.3 227.0L151.2 264.0L168.8 268.0L181.7 233.0Z" fill="var(--pants)" /><circle cx="168.0" cy="230.0" r="14" fill="var(--pants)" /><circle cx="160.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="172" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M260.1 142.1L138.0 159.1L142.0 200.9L265.1 193.9Z" fill="var(--shirt)" /><circle cx="262.6" cy="168.0" r="26" fill="var(--shirt)" /><circle cx="140.0" cy="180.0" r="21" fill="var(--shirt)" /><path d="M268.1 173.8L297.5 145.8L286.5 134.2L257.1 162.2Z" fill="var(--flesh)" /><circle cx="262.6" cy="168.0" r="8" fill="var(--flesh)" /><circle cx="292.0" cy="140.0" r="8" fill="var(--flesh)" /><path d="M121.3 172.8L106.9 227.0L133.1 237.0L158.7 187.2Z" fill="var(--pants)" /><circle cx="140.0" cy="180.0" r="20" fill="var(--pants)" /><circle cx="120.0" cy="232.0" r="14" fill="var(--pants)" /><path d="M107.6 225.4L94.0 261.8L110.0 270.2L132.4 238.6Z" fill="var(--pants)" /><circle cx="120.0" cy="232.0" r="14" fill="var(--pants)" /><circle cx="102.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="114" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M239.5 176.8L227.4 223.4L244.6 228.6L260.5 183.2Z" fill="var(--flesh)" /><circle cx="250.0" cy="180.0" r="11" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="9" fill="var(--flesh)" /><path d="M227.2 224.1L218.7 270.4L233.3 273.6L244.8 227.9Z" fill="var(--flesh)" /><circle cx="236.0" cy="226.0" r="9" fill="var(--flesh)" /><circle cx="226.0" cy="272.0" r="7.5" fill="var(--flesh)" /><circle cx="226" cy="272" r="8.5" fill="var(--flesh)" /><circle cx="292" cy="140" r="23" fill="var(--flesh)" /><path d="M269 143A23 23 0 0 1 313 132C298 134 284 134 269 143Z" fill="var(--hair)" /><circle cx="301" cy="143" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
