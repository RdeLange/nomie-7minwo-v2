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
    @keyframes highknees-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #highknees-1 { animation-name: highknees-1; }
    @keyframes highknees-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #highknees-2 { animation-name: highknees-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="highknees-1"><g class="far"><path d="M183.4 92.4L154.6 119.7L165.4 132.3L196.6 107.6Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="160.0" cy="126.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M152.5 122.5L141.7 149.1L154.3 154.9L167.5 129.5Z" fill="var(--flesh)" /><circle cx="160.0" cy="126.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="148.0" cy="152.0" r="6.9" fill="var(--flesh)" /><circle cx="148" cy="152" r="8.5" fill="var(--flesh)" /><path d="M170.1 162.0L182.1 221.4L209.9 218.6L209.9 158.0Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><path d="M182.0 220.6L189.0 270.4L207.0 269.6L210.0 219.4Z" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><circle cx="198.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="210" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M164.0 83.8L169.0 160.0L211.0 160.0L216.0 83.8Z" fill="var(--shirt)" /><circle cx="190.0" cy="83.8" r="26" fill="var(--shirt)" /><circle cx="190.0" cy="160.0" r="21" fill="var(--shirt)" /><path d="M198.0 83.8L198.0 46.0L182.0 46.0L182.0 83.8Z" fill="var(--flesh)" /><circle cx="190.0" cy="83.8" r="8" fill="var(--flesh)" /><circle cx="190.0" cy="46.0" r="8" fill="var(--flesh)" /><path d="M185.3 179.4L236.7 185.6L243.3 158.4L194.7 140.6Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="240.0" cy="172.0" r="14" fill="var(--pants)" /><path d="M226.2 169.8L223.1 220.6L240.9 223.4L253.8 174.2Z" fill="var(--pants)" /><circle cx="240.0" cy="172.0" r="14" fill="var(--pants)" /><circle cx="232.0" cy="222.0" r="9" fill="var(--pants)" /><ellipse cx="244" cy="230" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M184.2 109.3L217.2 127.6L226.8 112.4L195.8 90.7Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="11" fill="var(--flesh)" /><circle cx="222.0" cy="120.0" r="9" fill="var(--flesh)" /><path d="M227.4 127.2L250.5 108.0L241.5 96.0L216.6 112.8Z" fill="var(--flesh)" /><circle cx="222.0" cy="120.0" r="9" fill="var(--flesh)" /><circle cx="246.0" cy="102.0" r="7.5" fill="var(--flesh)" /><circle cx="246" cy="102" r="8.5" fill="var(--flesh)" /><circle cx="190" cy="46" r="23" fill="var(--flesh)" /><path d="M167 49A23 23 0 0 1 211 38C196 40 182 40 167 49Z" fill="var(--hair)" /><circle cx="199" cy="49" r="2.6" fill="#2b2b2b" /></g>
    <g id="highknees-2"><g class="far"><path d="M184.6 108.6L217.6 127.0L226.4 113.0L195.4 91.4Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="222.0" cy="120.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M227.0 126.6L250.1 107.5L241.9 96.5L217.0 113.4Z" fill="var(--flesh)" /><circle cx="222.0" cy="120.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="246.0" cy="102.0" r="6.9" fill="var(--flesh)" /><circle cx="246" cy="102" r="8.5" fill="var(--flesh)" /><path d="M185.3 179.4L236.7 185.6L243.3 158.4L194.7 140.6Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="240.0" cy="172.0" r="14" fill="var(--pants)" /><path d="M226.2 169.8L223.1 220.6L240.9 223.4L253.8 174.2Z" fill="var(--pants)" /><circle cx="240.0" cy="172.0" r="14" fill="var(--pants)" /><circle cx="232.0" cy="222.0" r="9" fill="var(--pants)" /><ellipse cx="244" cy="230" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M164.0 83.8L169.0 160.0L211.0 160.0L216.0 83.8Z" fill="var(--shirt)" /><circle cx="190.0" cy="83.8" r="26" fill="var(--shirt)" /><circle cx="190.0" cy="160.0" r="21" fill="var(--shirt)" /><path d="M198.0 83.8L198.0 46.0L182.0 46.0L182.0 83.8Z" fill="var(--flesh)" /><circle cx="190.0" cy="83.8" r="8" fill="var(--flesh)" /><circle cx="190.0" cy="46.0" r="8" fill="var(--flesh)" /><path d="M170.1 162.0L182.1 221.4L209.9 218.6L209.9 158.0Z" fill="var(--pants)" /><circle cx="190.0" cy="160.0" r="20" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><path d="M182.0 220.6L189.0 270.4L207.0 269.6L210.0 219.4Z" fill="var(--pants)" /><circle cx="196.0" cy="220.0" r="14" fill="var(--pants)" /><circle cx="198.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="210" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M182.8 91.7L154.1 119.2L165.9 132.8L197.2 108.3Z" fill="var(--flesh)" /><circle cx="190.0" cy="100.0" r="11" fill="var(--flesh)" /><circle cx="160.0" cy="126.0" r="9" fill="var(--flesh)" /><path d="M151.8 122.2L141.2 148.9L154.8 155.1L168.2 129.8Z" fill="var(--flesh)" /><circle cx="160.0" cy="126.0" r="9" fill="var(--flesh)" /><circle cx="148.0" cy="152.0" r="7.5" fill="var(--flesh)" /><circle cx="148" cy="152" r="8.5" fill="var(--flesh)" /><circle cx="190" cy="46" r="23" fill="var(--flesh)" /><path d="M167 49A23 23 0 0 1 211 38C196 40 182 40 167 49Z" fill="var(--hair)" /><circle cx="199" cy="49" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
