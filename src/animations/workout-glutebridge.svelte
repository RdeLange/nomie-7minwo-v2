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
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="glutebridge-1"><g class="far"><path d="M100.2 265.4L130.9 275.7L137.1 260.3L107.8 246.6Z" fill="var(--flesh)" /><circle cx="104.0" cy="256.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="134.0" cy="268.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M133.4 259.7L103.5 263.1L104.5 276.9L134.6 276.3Z" fill="var(--flesh)" /><circle cx="134.0" cy="268.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="104.0" cy="270.0" r="6.9" fill="var(--flesh)" /><circle cx="104" cy="270" r="8.5" fill="var(--flesh)" /><path d="M198.2 215.9L264.7 215.9L267.3 188.1L201.8 176.1Z" fill="var(--pants)" /><circle cx="200.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="266.0" cy="202.0" r="14" fill="var(--pants)" /><path d="M254.2 209.5L296.4 266.8L311.6 257.2L277.8 194.5Z" fill="var(--pants)" /><circle cx="266.0" cy="202.0" r="14" fill="var(--pants)" /><circle cx="304.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="316" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M103.1 277.7L210.0 214.5L190.0 177.5L78.5 231.9Z" fill="var(--shirt)" /><circle cx="90.8" cy="254.8" r="26" fill="var(--shirt)" /><circle cx="200.0" cy="196.0" r="21" fill="var(--shirt)" /><path d="M91.5 246.8L60.7 244.0L59.3 260.0L90.1 262.8Z" fill="var(--flesh)" /><circle cx="90.8" cy="254.8" r="8" fill="var(--flesh)" /><circle cx="60.0" cy="252.0" r="8" fill="var(--flesh)" /><path d="M198.7 216.0L261.1 214.0L262.9 186.0L201.3 176.0Z" fill="var(--pants)" /><circle cx="200.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="262.0" cy="200.0" r="14" fill="var(--pants)" /><path d="M250.1 207.3L292.3 266.7L307.7 257.3L273.9 192.7Z" fill="var(--pants)" /><circle cx="262.0" cy="200.0" r="14" fill="var(--pants)" /><circle cx="300.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="312" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M98.2 265.4L125.3 279.7L134.7 264.3L109.8 246.6Z" fill="var(--flesh)" /><circle cx="104.0" cy="256.0" r="11" fill="var(--flesh)" /><circle cx="130.0" cy="272.0" r="9" fill="var(--flesh)" /><path d="M129.5 263.0L95.6 266.5L96.4 281.5L130.5 281.0Z" fill="var(--flesh)" /><circle cx="130.0" cy="272.0" r="9" fill="var(--flesh)" /><circle cx="96.0" cy="274.0" r="7.5" fill="var(--flesh)" /><circle cx="96" cy="274" r="8.5" fill="var(--flesh)" /><circle cx="60" cy="252" r="23" fill="var(--flesh)" /><path d="M37 255A23 23 0 0 1 81 244C66 246 52 246 37 255Z" fill="var(--hair)" /><circle cx="69" cy="255" r="2.6" fill="#2b2b2b" /></g>
    <g id="glutebridge-2"><g class="far"><path d="M100.2 265.4L130.9 275.7L137.1 260.3L107.8 246.6Z" fill="var(--flesh)" /><circle cx="104.0" cy="256.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="134.0" cy="268.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M133.4 259.7L103.5 263.1L104.5 276.9L134.6 276.3Z" fill="var(--flesh)" /><circle cx="134.0" cy="268.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="104.0" cy="270.0" r="6.9" fill="var(--flesh)" /><circle cx="104" cy="270" r="8.5" fill="var(--flesh)" /><path d="M223.5 262.4L274.1 219.4L257.9 196.6L200.5 229.6Z" fill="var(--pants)" /><circle cx="212.0" cy="246.0" r="20" fill="var(--pants)" /><circle cx="266.0" cy="208.0" r="14" fill="var(--pants)" /><path d="M254.6 216.1L296.6 267.2L311.4 256.8L277.4 199.9Z" fill="var(--pants)" /><circle cx="266.0" cy="208.0" r="14" fill="var(--pants)" /><circle cx="304.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="316" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M92.7 280.7L213.5 266.9L210.5 225.1L88.9 228.9Z" fill="var(--shirt)" /><circle cx="90.8" cy="254.8" r="26" fill="var(--shirt)" /><circle cx="212.0" cy="246.0" r="21" fill="var(--shirt)" /><path d="M91.5 246.8L60.7 244.0L59.3 260.0L90.1 262.8Z" fill="var(--flesh)" /><circle cx="90.8" cy="254.8" r="8" fill="var(--flesh)" /><circle cx="60.0" cy="252.0" r="8" fill="var(--flesh)" /><path d="M224.5 261.6L270.7 216.9L253.3 195.1L199.5 230.4Z" fill="var(--pants)" /><circle cx="212.0" cy="246.0" r="20" fill="var(--pants)" /><circle cx="262.0" cy="206.0" r="14" fill="var(--pants)" /><path d="M250.4 213.9L292.6 267.1L307.4 256.9L273.6 198.1Z" fill="var(--pants)" /><circle cx="262.0" cy="206.0" r="14" fill="var(--pants)" /><circle cx="300.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="312" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M98.2 265.4L125.3 279.7L134.7 264.3L109.8 246.6Z" fill="var(--flesh)" /><circle cx="104.0" cy="256.0" r="11" fill="var(--flesh)" /><circle cx="130.0" cy="272.0" r="9" fill="var(--flesh)" /><path d="M129.5 263.0L95.6 266.5L96.4 281.5L130.5 281.0Z" fill="var(--flesh)" /><circle cx="130.0" cy="272.0" r="9" fill="var(--flesh)" /><circle cx="96.0" cy="274.0" r="7.5" fill="var(--flesh)" /><circle cx="96" cy="274" r="8.5" fill="var(--flesh)" /><circle cx="60" cy="252" r="23" fill="var(--flesh)" /><path d="M37 255A23 23 0 0 1 81 244C66 246 52 246 37 255Z" fill="var(--hair)" /><circle cx="69" cy="255" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
