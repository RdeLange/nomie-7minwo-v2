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
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="deadbug-1"><g class="far"><path d="M127.9 258.2L140.1 193.8L123.9 190.2L108.1 253.8Z" fill="var(--flesh)" /><circle cx="118.0" cy="256.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="132.0" cy="192.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M140.2 193.1L146.8 130.9L133.2 129.1L123.8 190.9Z" fill="var(--flesh)" /><circle cx="132.0" cy="192.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="140.0" cy="130.0" r="6.9" fill="var(--flesh)" /><circle cx="140" cy="130" r="8.5" fill="var(--flesh)" /><path d="M241.9 257.6L242.0 181.1L214.0 178.9L202.1 254.4Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="228.0" cy="180.0" r="14" fill="var(--pants)" /><path d="M228.7 194.0L266.5 187.0L265.5 169.0L227.3 166.0Z" fill="var(--pants)" /><circle cx="228.0" cy="180.0" r="14" fill="var(--pants)" /><circle cx="266.0" cy="178.0" r="9" fill="var(--pants)" /><ellipse cx="278" cy="186" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M104.1 281.4L221.9 277.0L222.1 235.0L104.3 229.4Z" fill="var(--shirt)" /><circle cx="104.2" cy="255.4" r="26" fill="var(--shirt)" /><circle cx="222.0" cy="256.0" r="21" fill="var(--shirt)" /><path d="M104.5 247.4L72.3 246.0L71.7 262.0L103.9 263.4Z" fill="var(--flesh)" /><circle cx="104.2" cy="255.4" r="8" fill="var(--flesh)" /><circle cx="72.0" cy="254.0" r="8" fill="var(--flesh)" /><path d="M242.0 256.0L236.0 176.0L208.0 176.0L202.0 256.0Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="222.0" cy="176.0" r="14" fill="var(--pants)" /><path d="M222.0 190.0L262.0 185.0L262.0 167.0L222.0 162.0Z" fill="var(--pants)" /><circle cx="222.0" cy="176.0" r="14" fill="var(--pants)" /><circle cx="262.0" cy="176.0" r="9" fill="var(--pants)" /><ellipse cx="274" cy="184" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M128.6 258.9L144.7 192.4L127.3 187.6L107.4 253.1Z" fill="var(--flesh)" /><circle cx="118.0" cy="256.0" r="11" fill="var(--flesh)" /><circle cx="136.0" cy="190.0" r="9" fill="var(--flesh)" /><path d="M144.9 191.4L153.4 127.2L138.6 124.8L127.1 188.6Z" fill="var(--flesh)" /><circle cx="136.0" cy="190.0" r="9" fill="var(--flesh)" /><circle cx="146.0" cy="126.0" r="7.5" fill="var(--flesh)" /><circle cx="146" cy="126" r="8.5" fill="var(--flesh)" /><circle cx="72" cy="254" r="23" fill="var(--flesh)" /><path d="M49 257A23 23 0 0 1 93 246C78 248 64 248 49 257Z" fill="var(--hair)" /><circle cx="81" cy="257" r="2.6" fill="#2b2b2b" /></g>
    <g id="deadbug-2"><g class="far"><path d="M117.0 245.9L55.2 253.8L56.8 270.2L119.0 266.1Z" fill="var(--flesh)" /><circle cx="118.0" cy="256.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="56.0" cy="262.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M54.8 253.8L15.0 261.2L17.0 274.8L57.2 270.2Z" fill="var(--flesh)" /><circle cx="56.0" cy="262.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="16.0" cy="268.0" r="6.9" fill="var(--flesh)" /><circle cx="16" cy="268" r="8.5" fill="var(--flesh)" /><path d="M220.1 275.9L302.6 277.9L305.4 250.1L223.9 236.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="304.0" cy="264.0" r="14" fill="var(--pants)" /><path d="M304.0 278.0L352.0 273.0L352.0 255.0L304.0 250.0Z" fill="var(--pants)" /><circle cx="304.0" cy="264.0" r="14" fill="var(--pants)" /><circle cx="352.0" cy="264.0" r="9" fill="var(--pants)" /><ellipse cx="364" cy="272" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M104.1 281.4L221.9 277.0L222.1 235.0L104.3 229.4Z" fill="var(--shirt)" /><circle cx="104.2" cy="255.4" r="26" fill="var(--shirt)" /><circle cx="222.0" cy="256.0" r="21" fill="var(--shirt)" /><path d="M104.5 247.4L72.3 246.0L71.7 262.0L103.9 263.4Z" fill="var(--flesh)" /><circle cx="104.2" cy="255.4" r="8" fill="var(--flesh)" /><circle cx="72.0" cy="254.0" r="8" fill="var(--flesh)" /><path d="M220.5 275.9L298.9 276.0L301.1 248.0L223.5 236.1Z" fill="var(--pants)" /><circle cx="222.0" cy="256.0" r="20" fill="var(--pants)" /><circle cx="300.0" cy="262.0" r="14" fill="var(--pants)" /><path d="M300.0 276.0L350.0 271.0L350.0 253.0L300.0 248.0Z" fill="var(--pants)" /><circle cx="300.0" cy="262.0" r="14" fill="var(--pants)" /><circle cx="350.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="362" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M117.0 245.0L49.2 253.0L50.8 271.0L119.0 267.0Z" fill="var(--flesh)" /><circle cx="118.0" cy="256.0" r="11" fill="var(--flesh)" /><circle cx="50.0" cy="262.0" r="9" fill="var(--flesh)" /><path d="M49.1 253.0L9.3 258.5L10.7 273.5L50.9 271.0Z" fill="var(--flesh)" /><circle cx="50.0" cy="262.0" r="9" fill="var(--flesh)" /><circle cx="10.0" cy="266.0" r="7.5" fill="var(--flesh)" /><circle cx="10" cy="266" r="8.5" fill="var(--flesh)" /><circle cx="72" cy="254" r="23" fill="var(--flesh)" /><path d="M49 257A23 23 0 0 1 93 246C78 248 64 248 49 257Z" fill="var(--hair)" /><circle cx="81" cy="257" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
