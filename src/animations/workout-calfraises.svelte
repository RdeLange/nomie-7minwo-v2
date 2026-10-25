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
    @keyframes calfraises-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #calfraises-1 { animation-name: calfraises-1; }
    @keyframes calfraises-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #calfraises-2 { animation-name: calfraises-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="calfraises-1"><g class="far"><path d="M180.3 97.1L172.1 131.7L187.9 136.3L199.7 102.9Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="180.0" cy="134.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M171.8 135.0L177.2 166.9L190.8 165.1L188.2 133.0Z" fill="var(--flesh)" /><circle cx="180.0" cy="134.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="184.0" cy="166.0" r="6.9" fill="var(--flesh)" /><circle cx="184" cy="166" r="8.5" fill="var(--flesh)" /><path d="M170.0 160.0L176.0 220.0L204.0 220.0L210.0 160.0Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="190.0" cy="220.0" r="14" fill="var(--pants)" /><path d="M176.0 220.0L181.0 268.0L199.0 268.0L204.0 220.0Z" fill="var(--pants)" /><circle cx="190.0" cy="220.0" r="14" fill="var(--pants)" /><circle cx="190.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="202" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M164.0 83.8L169.0 160.0L211.0 160.0L216.0 83.8Z" fill="var(--shirt)" /><circle cx="190.0" cy="83.8" r="26" fill="var(--shirt)" /><circle cx="190.0" cy="160.0" r="21" fill="var(--shirt)" /><path d="M198.0 83.8L198.0 46.0L182.0 46.0L182.0 83.8Z" fill="var(--flesh)" /><circle cx="190.0" cy="83.8" r="8" fill="var(--flesh)" /><circle cx="190.0" cy="46.0" r="8" fill="var(--flesh)" /><path d="M170.1 162.0L182.1 221.4L209.9 218.6L209.9 158.0Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><path d="M182.0 220.0L187.0 268.0L205.0 268.0L210.0 220.0Z" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><circle cx="196.0" cy="268.0" r="9" fill="var(--pants)" /><ellipse cx="208" cy="276" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M180.7 105.8L202.4 136.8L217.6 127.2L199.3 94.2Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="11" fill="var(--flesh)" /><circle cx="210.0" cy="132.0" r="9" fill="var(--flesh)" /><path d="M201.2 134.1L210.7 167.7L225.3 164.3L218.8 129.9Z" fill="var(--flesh)" /><circle cx="210.0" cy="132.0" r="9" fill="var(--flesh)" /><circle cx="218.0" cy="166.0" r="7.5" fill="var(--flesh)" /><circle cx="218" cy="166" r="8.5" fill="var(--flesh)" /><circle cx="190" cy="46" r="23" fill="var(--flesh)" /><path d="M167 49A23 23 0 0 1 211 38C196 40 182 40 167 49Z" fill="var(--hair)" /><circle cx="199" cy="49" r="2.6" fill="#2b2b2b" /></g>
    <g id="calfraises-2"><g class="far"><path d="M180.3 97.1L172.1 131.7L187.9 136.3L199.7 102.9Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="180.0" cy="134.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M171.8 135.0L177.2 166.9L190.8 165.1L188.2 133.0Z" fill="var(--flesh)" /><circle cx="180.0" cy="134.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="184.0" cy="166.0" r="6.9" fill="var(--flesh)" /><circle cx="184" cy="166" r="8.5" fill="var(--flesh)" /><path d="M170.0 161.4L180.0 219.0L208.0 217.0L210.0 158.6Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="194.0" cy="218.0" r="14" fill="var(--pants)" /><path d="M180.0 218.7L187.0 256.5L205.0 255.5L208.0 217.3Z" fill="var(--pants)" /><circle cx="194.0" cy="218.0" r="14" fill="var(--pants)" /><circle cx="196.0" cy="256.0" r="9" fill="var(--pants)" /><ellipse cx="208" cy="264" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M164.0 83.8L169.0 160.0L211.0 160.0L216.0 83.8Z" fill="var(--shirt)" /><circle cx="190.0" cy="83.8" r="26" fill="var(--shirt)" /><circle cx="190.0" cy="160.0" r="21" fill="var(--shirt)" /><path d="M198.0 83.8L198.0 46.0L182.0 46.0L182.0 83.8Z" fill="var(--flesh)" /><circle cx="190.0" cy="83.8" r="8" fill="var(--flesh)" /><circle cx="190.0" cy="46.0" r="8" fill="var(--flesh)" /><path d="M170.3 163.4L186.2 220.4L213.8 215.6L209.7 156.6Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="200.0" cy="218.0" r="14" fill="var(--pants)" /><path d="M186.0 218.7L193.0 256.5L211.0 255.5L214.0 217.3Z" fill="var(--pants)" /><circle cx="200.0" cy="218.0" r="14" fill="var(--pants)" /><circle cx="202.0" cy="256.0" r="9" fill="var(--pants)" /><ellipse cx="214" cy="264" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M180.7 105.8L202.4 136.8L217.6 127.2L199.3 94.2Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="11" fill="var(--flesh)" /><circle cx="210.0" cy="132.0" r="9" fill="var(--flesh)" /><path d="M201.2 134.1L210.7 167.7L225.3 164.3L218.8 129.9Z" fill="var(--flesh)" /><circle cx="210.0" cy="132.0" r="9" fill="var(--flesh)" /><circle cx="218.0" cy="166.0" r="7.5" fill="var(--flesh)" /><circle cx="218" cy="166" r="8.5" fill="var(--flesh)" /><circle cx="190" cy="46" r="23" fill="var(--flesh)" /><path d="M167 49A23 23 0 0 1 211 38C196 40 182 40 167 49Z" fill="var(--hair)" /><circle cx="199" cy="49" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
