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
    @keyframes russiantwist-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #russiantwist-1 { animation-name: russiantwist-1; }
    @keyframes russiantwist-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #russiantwist-2 { animation-name: russiantwist-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="russiantwist-1"><g class="far"><path d="M120.7 179.6L167.3 193.8L172.7 178.2L127.3 160.4Z" fill="var(--flesh)" /><circle cx="124.0" cy="170.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="170.0" cy="186.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M169.1 194.2L205.2 196.9L206.8 183.1L170.9 177.8Z" fill="var(--flesh)" /><circle cx="170.0" cy="186.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="206.0" cy="190.0" r="6.9" fill="var(--flesh)" /><circle cx="206" cy="190" r="8.5" fill="var(--flesh)" /><path d="M158.8 268.0L238.1 222.6L225.9 197.4L141.2 232.0Z" fill="var(--pants)" /><circle cx="150.0" cy="250.0" r="20" fill="var(--pants)" /><circle cx="232.0" cy="210.0" r="14" fill="var(--pants)" /><path d="M218.8 214.6L241.5 264.9L258.5 259.1L245.2 205.4Z" fill="var(--pants)" /><circle cx="232.0" cy="210.0" r="14" fill="var(--pants)" /><circle cx="250.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="262" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M95.1 166.8L130.1 256.6L169.9 243.4L144.5 150.4Z" fill="var(--shirt)" /><circle cx="119.8" cy="158.6" r="26" fill="var(--shirt)" /><circle cx="150.0" cy="250.0" r="21" fill="var(--shirt)" /><path d="M127.3 155.8L117.5 129.2L102.5 134.8L112.3 161.4Z" fill="var(--flesh)" /><circle cx="119.8" cy="158.6" r="8" fill="var(--flesh)" /><circle cx="110.0" cy="132.0" r="8" fill="var(--flesh)" /><path d="M158.6 268.1L232.0 226.7L220.0 201.3L141.4 231.9Z" fill="var(--pants)" /><circle cx="150.0" cy="250.0" r="20" fill="var(--pants)" /><circle cx="226.0" cy="214.0" r="14" fill="var(--pants)" /><path d="M212.8 218.6L235.5 268.9L252.5 263.1L239.2 209.4Z" fill="var(--pants)" /><circle cx="226.0" cy="214.0" r="14" fill="var(--pants)" /><circle cx="244.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="256" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M120.1 180.3L172.8 198.4L179.2 181.6L127.9 159.7Z" fill="var(--flesh)" /><circle cx="124.0" cy="170.0" r="11" fill="var(--flesh)" /><circle cx="176.0" cy="190.0" r="9" fill="var(--flesh)" /><path d="M174.6 198.9L212.8 203.4L215.2 188.6L177.4 181.1Z" fill="var(--flesh)" /><circle cx="176.0" cy="190.0" r="9" fill="var(--flesh)" /><circle cx="214.0" cy="196.0" r="7.5" fill="var(--flesh)" /><circle cx="214" cy="196" r="8.5" fill="var(--flesh)" /><circle cx="110" cy="132" r="23" fill="var(--flesh)" /><path d="M87 135A23 23 0 0 1 131 124C116 126 102 126 87 135Z" fill="var(--hair)" /><circle cx="119" cy="135" r="2.6" fill="#2b2b2b" /></g>
    <g id="russiantwist-2"><g class="far"><path d="M118.7 178.6L155.7 199.1L164.3 184.9L129.3 161.4Z" fill="var(--flesh)" /><circle cx="124.0" cy="170.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="160.0" cy="192.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M158.4 183.9L118.6 193.2L121.4 206.8L161.6 200.1Z" fill="var(--flesh)" /><circle cx="160.0" cy="192.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="120.0" cy="200.0" r="6.9" fill="var(--flesh)" /><circle cx="120" cy="200" r="8.5" fill="var(--flesh)" /><path d="M158.8 268.0L238.1 222.6L225.9 197.4L141.2 232.0Z" fill="var(--pants)" /><circle cx="150.0" cy="250.0" r="20" fill="var(--pants)" /><circle cx="232.0" cy="210.0" r="14" fill="var(--pants)" /><path d="M218.8 214.6L241.5 264.9L258.5 259.1L245.2 205.4Z" fill="var(--pants)" /><circle cx="232.0" cy="210.0" r="14" fill="var(--pants)" /><circle cx="250.0" cy="262.0" r="9" fill="var(--pants)" /><ellipse cx="262" cy="270" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M95.1 166.8L130.1 256.6L169.9 243.4L144.5 150.4Z" fill="var(--shirt)" /><circle cx="119.8" cy="158.6" r="26" fill="var(--shirt)" /><circle cx="150.0" cy="250.0" r="21" fill="var(--shirt)" /><path d="M127.3 155.8L117.5 129.2L102.5 134.8L112.3 161.4Z" fill="var(--flesh)" /><circle cx="119.8" cy="158.6" r="8" fill="var(--flesh)" /><circle cx="110.0" cy="132.0" r="8" fill="var(--flesh)" /><path d="M158.6 268.1L232.0 226.7L220.0 201.3L141.4 231.9Z" fill="var(--pants)" /><circle cx="150.0" cy="250.0" r="20" fill="var(--pants)" /><circle cx="226.0" cy="214.0" r="14" fill="var(--pants)" /><path d="M212.8 218.6L235.5 268.9L252.5 263.1L239.2 209.4Z" fill="var(--pants)" /><circle cx="226.0" cy="214.0" r="14" fill="var(--pants)" /><circle cx="244.0" cy="266.0" r="9" fill="var(--pants)" /><ellipse cx="256" cy="274" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M118.0 179.2L159.1 203.5L168.9 188.5L130.0 160.8Z" fill="var(--flesh)" /><circle cx="124.0" cy="170.0" r="11" fill="var(--flesh)" /><circle cx="164.0" cy="196.0" r="9" fill="var(--flesh)" /><path d="M162.2 187.2L122.5 196.6L125.5 211.4L165.8 204.8Z" fill="var(--flesh)" /><circle cx="164.0" cy="196.0" r="9" fill="var(--flesh)" /><circle cx="124.0" cy="204.0" r="7.5" fill="var(--flesh)" /><circle cx="124" cy="204" r="8.5" fill="var(--flesh)" /><circle cx="110" cy="132" r="23" fill="var(--flesh)" /><path d="M87 135A23 23 0 0 1 131 124C116 126 102 126 87 135Z" fill="var(--hair)" /><circle cx="119" cy="135" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
