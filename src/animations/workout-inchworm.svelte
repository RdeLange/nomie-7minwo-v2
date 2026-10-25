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
    @keyframes inchworm-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #inchworm-1 { animation-name: inchworm-1; }
    @keyframes inchworm-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #inchworm-2 { animation-name: inchworm-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="inchworm-1"><g class="far"><path d="M228.0 182.6L223.8 226.9L240.2 229.1L248.0 185.4Z" fill="var(--flesh)" /><circle cx="238.0" cy="184.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="232.0" cy="228.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M223.9 229.5L233.2 271.3L246.8 268.7L240.1 226.5Z" fill="var(--flesh)" /><circle cx="232.0" cy="228.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="240.0" cy="270.0" r="6.9" fill="var(--flesh)" /><circle cx="240" cy="270" r="8.5" fill="var(--flesh)" /><path d="M160.2 204.6L131.1 227.8L144.9 252.2L179.8 239.4Z" fill="var(--pants)" /><circle cx="170.0" cy="222.0" r="20" fill="var(--pants)" /><circle cx="138.0" cy="240.0" r="14" fill="var(--pants)" /><path d="M130.4 228.2L99.1 254.4L108.9 269.6L145.6 251.8Z" fill="var(--pants)" /><circle cx="138.0" cy="240.0" r="14" fill="var(--pants)" /><circle cx="104.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="116" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M235.3 154.8L159.6 203.8L180.4 240.2L261.1 200.0Z" fill="var(--shirt)" /><circle cx="248.2" cy="177.4" r="26" fill="var(--shirt)" /><circle cx="170.0" cy="222.0" r="21" fill="var(--shirt)" /><path d="M252.5 184.1L276.3 168.7L267.7 155.3L243.9 170.7Z" fill="var(--flesh)" /><circle cx="248.2" cy="177.4" r="8" fill="var(--flesh)" /><circle cx="272.0" cy="162.0" r="8" fill="var(--flesh)" /><path d="M160.1 204.6L128.1 229.8L141.9 254.2L179.9 239.4Z" fill="var(--pants)" /><circle cx="170.0" cy="222.0" r="20" fill="var(--pants)" /><circle cx="135.0" cy="242.0" r="14" fill="var(--pants)" /><path d="M127.7 230.0L97.3 254.3L106.7 269.7L142.3 254.0Z" fill="var(--pants)" /><circle cx="135.0" cy="242.0" r="14" fill="var(--pants)" /><circle cx="102.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="114" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M227.1 185.5L235.1 229.2L252.9 226.8L248.9 182.5Z" fill="var(--flesh)" /><circle cx="238.0" cy="184.0" r="11" fill="var(--flesh)" /><circle cx="244.0" cy="228.0" r="9" fill="var(--flesh)" /><path d="M235.1 229.3L242.6 271.1L257.4 268.9L252.9 226.7Z" fill="var(--flesh)" /><circle cx="244.0" cy="228.0" r="9" fill="var(--flesh)" /><circle cx="250.0" cy="270.0" r="7.5" fill="var(--flesh)" /><circle cx="250" cy="270" r="8.5" fill="var(--flesh)" /><circle cx="272" cy="162" r="23" fill="var(--flesh)" /><path d="M249 165A23 23 0 0 1 293 154C278 156 264 156 249 165Z" fill="var(--hair)" /><circle cx="281" cy="165" r="2.6" fill="#2b2b2b" /></g>
    <g id="inchworm-2"><g class="far"><path d="M189.9 199.0L187.8 239.2L204.2 240.8L210.1 201.0Z" fill="var(--flesh)" /><circle cx="200.0" cy="200.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="196.0" cy="240.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M187.9 241.9L197.3 275.6L210.7 272.4L204.1 238.1Z" fill="var(--flesh)" /><circle cx="196.0" cy="240.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="204.0" cy="274.0" r="6.9" fill="var(--flesh)" /><circle cx="204" cy="274" r="8.5" fill="var(--flesh)" /><path d="M108.2 162.7L122.1 219.9L149.9 216.1L147.8 157.3Z" fill="var(--pants)" /><circle cx="128.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="136.0" cy="218.0" r="14" fill="var(--pants)" /><path d="M122.0 217.4L125.0 267.6L143.0 268.4L150.0 218.6Z" fill="var(--pants)" /><circle cx="136.0" cy="218.0" r="14" fill="var(--pants)" /><circle cx="134.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="146" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M225.2 178.4L137.2 141.1L118.8 178.9L202.4 225.2Z" fill="var(--shirt)" /><circle cx="213.8" cy="201.8" r="26" fill="var(--shirt)" /><circle cx="128.0" cy="160.0" r="21" fill="var(--shirt)" /><path d="M212.8 209.7L245.0 213.9L247.0 198.1L214.8 193.9Z" fill="var(--flesh)" /><circle cx="213.8" cy="201.8" r="8" fill="var(--flesh)" /><circle cx="246.0" cy="206.0" r="8" fill="var(--flesh)" /><path d="M108.0 161.4L118.0 219.0L146.0 217.0L148.0 158.6Z" fill="var(--pants)" /><circle cx="128.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="132.0" cy="218.0" r="14" fill="var(--pants)" /><path d="M118.0 217.4L121.0 267.6L139.0 268.4L146.0 218.6Z" fill="var(--pants)" /><circle cx="132.0" cy="218.0" r="14" fill="var(--pants)" /><circle cx="130.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="142" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M189.1 201.1L195.0 240.9L213.0 239.1L210.9 198.9Z" fill="var(--flesh)" /><circle cx="200.0" cy="200.0" r="11" fill="var(--flesh)" /><circle cx="204.0" cy="240.0" r="9" fill="var(--flesh)" /><path d="M195.2 242.1L204.7 275.7L219.3 272.3L212.8 237.9Z" fill="var(--flesh)" /><circle cx="204.0" cy="240.0" r="9" fill="var(--flesh)" /><circle cx="212.0" cy="274.0" r="7.5" fill="var(--flesh)" /><circle cx="212" cy="274" r="8.5" fill="var(--flesh)" /><circle cx="246" cy="206" r="23" fill="var(--flesh)" /><path d="M223 209A23 23 0 0 1 267 198C252 200 238 200 223 209Z" fill="var(--hair)" /><circle cx="255" cy="209" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
