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
    @keyframes flutterkicks-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #flutterkicks-1 { animation-name: flutterkicks-1; }
    @keyframes flutterkicks-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #flutterkicks-2 { animation-name: flutterkicks-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="flutterkicks-1"><g class="far"><path d="M110.3 256.5L133.7 281.3L146.3 270.7L125.7 243.5Z" fill="var(--flesh)" /><circle cx="118.0" cy="250.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="140.0" cy="276.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M138.9 284.2L169.1 286.8L170.9 273.2L141.1 267.8Z" fill="var(--flesh)" /><circle cx="140.0" cy="276.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="170.0" cy="280.0" r="6.9" fill="var(--flesh)" /><circle cx="170" cy="280" r="8.5" fill="var(--flesh)" /><path d="M220.1 275.9L284.7 275.9L287.3 248.1L223.9 236.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="286.0" cy="262.0" r="14" fill="var(--pants)" /><path d="M284.3 275.9L350.9 278.9L353.1 261.1L287.7 248.1Z" fill="var(--pants)" /><circle cx="286.0" cy="262.0" r="14" fill="var(--pants)" /><circle cx="352.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="364" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M102.7 272.3L220.3 276.9L223.7 235.1L106.9 220.5Z" fill="var(--shirt)" /><circle cx="104.8" cy="246.4" r="26" fill="var(--shirt)" /><circle cx="222.0" cy="256.0" r="21" fill="var(--shirt)" /><path d="M106.9 238.7L76.1 230.3L71.9 245.7L102.7 254.1Z" fill="var(--flesh)" /><circle cx="104.8" cy="246.4" r="8" fill="var(--flesh)" /><circle cx="74.0" cy="238.0" r="8" fill="var(--flesh)" /><path d="M236.3 269.9L300.0 195.8L280.0 176.2L207.7 242.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="290.0" cy="186.0" r="14" fill="var(--pants)" /><path d="M299.5 196.3L346.1 146.6L333.9 133.4L280.5 175.7Z" fill="var(--pants)" /><circle cx="290.0" cy="186.0" r="14" fill="var(--pants)" /><circle cx="340.0" cy="140.0" r="9" fill="var(--pants)" /><ellipse cx="352" cy="148" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M112.2 259.3L145.2 277.6L154.8 262.4L123.8 240.7Z" fill="var(--flesh)" /><circle cx="118.0" cy="250.0" r="11" fill="var(--flesh)" /><circle cx="150.0" cy="270.0" r="9" fill="var(--flesh)" /><path d="M148.8 278.9L179.0 281.4L181.0 266.6L151.2 261.1Z" fill="var(--flesh)" /><circle cx="150.0" cy="270.0" r="9" fill="var(--flesh)" /><circle cx="180.0" cy="274.0" r="7.5" fill="var(--flesh)" /><circle cx="180" cy="274" r="8.5" fill="var(--flesh)" /><circle cx="74" cy="238" r="23" fill="var(--flesh)" /><path d="M51 241A23 23 0 0 1 95 230C80 232 66 232 51 241Z" fill="var(--hair)" /><circle cx="83" cy="241" r="2.6" fill="#2b2b2b" /></g>
    <g id="flutterkicks-2"><g class="far"><path d="M110.3 256.5L133.7 281.3L146.3 270.7L125.7 243.5Z" fill="var(--flesh)" /><circle cx="118.0" cy="250.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="140.0" cy="276.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M138.9 284.2L169.1 286.8L170.9 273.2L141.1 267.8Z" fill="var(--flesh)" /><circle cx="140.0" cy="276.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="170.0" cy="280.0" r="6.9" fill="var(--flesh)" /><circle cx="170" cy="280" r="8.5" fill="var(--flesh)" /><path d="M236.3 269.9L300.0 195.8L280.0 176.2L207.7 242.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="290.0" cy="186.0" r="14" fill="var(--pants)" /><path d="M299.5 196.3L346.1 146.6L333.9 133.4L280.5 175.7Z" fill="var(--pants)" /><circle cx="290.0" cy="186.0" r="14" fill="var(--pants)" /><circle cx="340.0" cy="140.0" r="9" fill="var(--pants)" /><ellipse cx="352" cy="148" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M102.7 272.3L220.3 276.9L223.7 235.1L106.9 220.5Z" fill="var(--shirt)" /><circle cx="104.8" cy="246.4" r="26" fill="var(--shirt)" /><circle cx="222.0" cy="256.0" r="21" fill="var(--shirt)" /><path d="M106.9 238.7L76.1 230.3L71.9 245.7L102.7 254.1Z" fill="var(--flesh)" /><circle cx="104.8" cy="246.4" r="8" fill="var(--flesh)" /><circle cx="74.0" cy="238.0" r="8" fill="var(--flesh)" /><path d="M220.1 275.9L284.7 275.9L287.3 248.1L223.9 236.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="286.0" cy="262.0" r="14" fill="var(--pants)" /><path d="M284.3 275.9L350.9 278.9L353.1 261.1L287.7 248.1Z" fill="var(--pants)" /><circle cx="286.0" cy="262.0" r="14" fill="var(--pants)" /><circle cx="352.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="364" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M112.2 259.3L145.2 277.6L154.8 262.4L123.8 240.7Z" fill="var(--flesh)" /><circle cx="118.0" cy="250.0" r="11" fill="var(--flesh)" /><circle cx="150.0" cy="270.0" r="9" fill="var(--flesh)" /><path d="M148.8 278.9L179.0 281.4L181.0 266.6L151.2 261.1Z" fill="var(--flesh)" /><circle cx="150.0" cy="270.0" r="9" fill="var(--flesh)" /><circle cx="180.0" cy="274.0" r="7.5" fill="var(--flesh)" /><circle cx="180" cy="274" r="8.5" fill="var(--flesh)" /><circle cx="74" cy="238" r="23" fill="var(--flesh)" /><path d="M51 241A23 23 0 0 1 95 230C80 232 66 232 51 241Z" fill="var(--hair)" /><circle cx="83" cy="241" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
