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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="donkeykicks-1"><g class="far"><path d="M238.1 187.9L229.9 234.2L246.1 237.8L257.9 192.1Z" fill="var(--flesh)" /><circle cx="248.0" cy="190.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="238.0" cy="236.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M229.7 235.5L229.1 271.6L242.9 272.4L246.3 236.5Z" fill="var(--flesh)" /><circle cx="238.0" cy="236.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="236.0" cy="272.0" r="6.9" fill="var(--flesh)" /><circle cx="236" cy="272" r="8.5" fill="var(--flesh)" /><path d="M136.4 178.5L103.5 142.0L80.5 158.0L103.6 201.5Z" fill="var(--pants)" /><circle cx="120.0" cy="190.0" r="20" fill="var(--pants)" /><circle cx="92.0" cy="150.0" r="14" fill="var(--pants)" /><path d="M100.5 138.9L47.4 104.8L36.6 119.2L83.5 161.1Z" fill="var(--pants)" /><circle cx="92.0" cy="150.0" r="14" fill="var(--pants)" /><circle cx="42.0" cy="112.0" r="9" fill="var(--pants)" /><ellipse cx="54" cy="120" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M263.3 152.1L118.3 169.1L121.7 210.9L267.5 203.9Z" fill="var(--shirt)" /><circle cx="265.4" cy="178.0" r="26" fill="var(--shirt)" /><circle cx="120.0" cy="190.0" r="21" fill="var(--shirt)" /><path d="M269.9 184.6L310.5 156.6L301.5 143.4L260.9 171.4Z" fill="var(--flesh)" /><circle cx="265.4" cy="178.0" r="8" fill="var(--flesh)" /><circle cx="306.0" cy="150.0" r="8" fill="var(--flesh)" /><path d="M100.0 190.0L106.0 240.0L134.0 240.0L140.0 190.0Z" fill="var(--pants)" /><circle cx="120.0" cy="190.0" r="20" fill="var(--pants)" /><circle cx="120.0" cy="240.0" r="14" fill="var(--pants)" /><path d="M112.0 228.5L74.8 260.6L85.2 275.4L128.0 251.5Z" fill="var(--pants)" /><circle cx="120.0" cy="240.0" r="14" fill="var(--pants)" /><circle cx="80.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="92" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M237.0 190.9L243.0 240.7L261.0 239.3L259.0 189.1Z" fill="var(--flesh)" /><circle cx="248.0" cy="190.0" r="11" fill="var(--flesh)" /><circle cx="252.0" cy="240.0" r="9" fill="var(--flesh)" /><path d="M243.0 240.0L244.5 272.0L259.5 272.0L261.0 240.0Z" fill="var(--flesh)" /><circle cx="252.0" cy="240.0" r="9" fill="var(--flesh)" /><circle cx="252.0" cy="272.0" r="7.5" fill="var(--flesh)" /><circle cx="252" cy="272" r="8.5" fill="var(--flesh)" /><circle cx="306" cy="150" r="23" fill="var(--flesh)" /><path d="M283 153A23 23 0 0 1 327 142C312 144 298 144 283 153Z" fill="var(--hair)" /><circle cx="315" cy="153" r="2.6" fill="#2b2b2b" /></g>
    <g id="donkeykicks-2"><g class="far"><path d="M238.1 187.9L229.9 234.2L246.1 237.8L257.9 192.1Z" fill="var(--flesh)" /><circle cx="248.0" cy="190.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="238.0" cy="236.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M229.7 235.5L229.1 271.6L242.9 272.4L246.3 236.5Z" fill="var(--flesh)" /><circle cx="238.0" cy="236.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="236.0" cy="272.0" r="6.9" fill="var(--flesh)" /><circle cx="236" cy="272" r="8.5" fill="var(--flesh)" /><path d="M100.3 193.3L118.2 264.3L145.8 259.7L139.7 186.7Z" fill="var(--pants)" /><circle cx="120.0" cy="190.0" r="20" fill="var(--pants)" /><circle cx="132.0" cy="262.0" r="14" fill="var(--pants)" /><path d="M129.7 248.2L94.5 259.1L97.5 276.9L134.3 275.8Z" fill="var(--pants)" /><circle cx="132.0" cy="262.0" r="14" fill="var(--pants)" /><circle cx="96.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="108" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M263.3 152.1L118.3 169.1L121.7 210.9L267.5 203.9Z" fill="var(--shirt)" /><circle cx="265.4" cy="178.0" r="26" fill="var(--shirt)" /><circle cx="120.0" cy="190.0" r="21" fill="var(--shirt)" /><path d="M269.9 184.6L310.5 156.6L301.5 143.4L260.9 171.4Z" fill="var(--flesh)" /><circle cx="265.4" cy="178.0" r="8" fill="var(--flesh)" /><circle cx="306.0" cy="150.0" r="8" fill="var(--flesh)" /><path d="M100.0 190.0L106.0 240.0L134.0 240.0L140.0 190.0Z" fill="var(--pants)" /><circle cx="120.0" cy="190.0" r="20" fill="var(--pants)" /><circle cx="120.0" cy="240.0" r="14" fill="var(--pants)" /><path d="M112.0 228.5L74.8 260.6L85.2 275.4L128.0 251.5Z" fill="var(--pants)" /><circle cx="120.0" cy="240.0" r="14" fill="var(--pants)" /><circle cx="80.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="92" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M237.0 190.9L243.0 240.7L261.0 239.3L259.0 189.1Z" fill="var(--flesh)" /><circle cx="248.0" cy="190.0" r="11" fill="var(--flesh)" /><circle cx="252.0" cy="240.0" r="9" fill="var(--flesh)" /><path d="M243.0 240.0L244.5 272.0L259.5 272.0L261.0 240.0Z" fill="var(--flesh)" /><circle cx="252.0" cy="240.0" r="9" fill="var(--flesh)" /><circle cx="252.0" cy="272.0" r="7.5" fill="var(--flesh)" /><circle cx="252" cy="272" r="8.5" fill="var(--flesh)" /><circle cx="306" cy="150" r="23" fill="var(--flesh)" /><path d="M283 153A23 23 0 0 1 327 142C312 144 298 144 283 153Z" fill="var(--hair)" /><circle cx="315" cy="153" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
