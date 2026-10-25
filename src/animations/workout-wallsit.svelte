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
    @keyframes wallsit-1 { 0% { opacity: 1; } 50%, 100% { opacity: 0; } }
    #wallsit-1 { animation-name: wallsit-1; }
    @keyframes wallsit-2 { 0% { opacity: 0; } 50%, 100% { opacity: 1; } }
    #wallsit-2 { animation-name: wallsit-2; }
    .paused .shapes > * { filter: grayscale(100%); opacity: 0.8; animation-play-state: paused; }
    .far { filter: brightness(0.78); }
    .flip .shapes > * { transform-origin: center center; transform: scaleX(-1); }
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" height="100%" width="100%">
<g class:paused={isPaused} class:flip={flipsvg}>
  <g class="shapes" bind:this={rootElement}>
    <g id="wallsit-1"><g class="far"><path d="M108.8 117.2L150.1 155.9L161.9 144.1L123.2 102.8Z" fill="var(--flesh)" /><circle cx="116.0" cy="110.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="156.0" cy="150.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M152.2 157.3L202.8 182.1L209.2 169.9L159.8 142.7Z" fill="var(--flesh)" /><circle cx="156.0" cy="150.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="206.0" cy="176.0" r="6.9" fill="var(--flesh)" /><circle cx="206" cy="176" r="8.5" fill="var(--flesh)" /><path d="M140.0 216.0L236.0 210.0L236.0 182.0L140.0 176.0Z" fill="var(--pants)" /><circle cx="140.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="236.0" cy="196.0" r="14" fill="var(--pants)" /><path d="M222.0 196.4L229.0 270.2L247.0 269.8L250.0 195.6Z" fill="var(--pants)" /><circle cx="236.0" cy="196.0" r="14" fill="var(--pants)" /><circle cx="238.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="250" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M91.9 103.9L119.5 200.8L160.5 191.2L142.5 92.1Z" fill="var(--shirt)" /><circle cx="117.2" cy="98.0" r="26" fill="var(--shirt)" /><circle cx="140.0" cy="196.0" r="21" fill="var(--shirt)" /><path d="M125.2 98.8L128.0 70.8L112.0 69.2L109.2 97.2Z" fill="var(--flesh)" /><circle cx="117.2" cy="98.0" r="8" fill="var(--flesh)" /><circle cx="120.0" cy="70.0" r="8" fill="var(--flesh)" /><path d="M140.0 216.0L232.0 210.0L232.0 182.0L140.0 176.0Z" fill="var(--pants)" /><circle cx="140.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="232.0" cy="196.0" r="14" fill="var(--pants)" /><path d="M218.0 196.4L225.0 270.2L243.0 269.8L246.0 195.6Z" fill="var(--pants)" /><circle cx="232.0" cy="196.0" r="14" fill="var(--pants)" /><circle cx="234.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="246" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M108.6 118.1L153.9 156.7L166.1 143.3L123.4 101.9Z" fill="var(--flesh)" /><circle cx="116.0" cy="110.0" r="11" fill="var(--flesh)" /><circle cx="160.0" cy="150.0" r="9" fill="var(--flesh)" /><path d="M155.8 158.0L206.5 182.7L213.5 169.3L164.2 142.0Z" fill="var(--flesh)" /><circle cx="160.0" cy="150.0" r="9" fill="var(--flesh)" /><circle cx="210.0" cy="176.0" r="7.5" fill="var(--flesh)" /><circle cx="210" cy="176" r="8.5" fill="var(--flesh)" /><circle cx="120" cy="70" r="23" fill="var(--flesh)" /><path d="M97 73A23 23 0 0 1 141 62C126 64 112 64 97 73Z" fill="var(--hair)" /><circle cx="129" cy="73" r="2.6" fill="#2b2b2b" /></g>
    <g id="wallsit-2"><g class="far"><path d="M111.5 119.1L168.3 145.4L175.7 130.6L120.5 100.9Z" fill="var(--flesh)" /><circle cx="116.0" cy="110.0" r="10.120000000000001" fill="var(--flesh)" /><circle cx="172.0" cy="138.0" r="8.280000000000001" fill="var(--flesh)" /><path d="M168.4 145.5L215.0 166.2L221.0 153.8L175.6 130.5Z" fill="var(--flesh)" /><circle cx="172.0" cy="138.0" r="8.280000000000001" fill="var(--flesh)" /><circle cx="218.0" cy="160.0" r="6.9" fill="var(--flesh)" /><circle cx="218" cy="160" r="8.5" fill="var(--flesh)" /><path d="M140.0 216.0L236.0 210.0L236.0 182.0L140.0 176.0Z" fill="var(--pants)" /><circle cx="140.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="236.0" cy="196.0" r="14" fill="var(--pants)" /><path d="M222.0 196.4L229.0 270.2L247.0 269.8L250.0 195.6Z" fill="var(--pants)" /><circle cx="236.0" cy="196.0" r="14" fill="var(--pants)" /><circle cx="238.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="250" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /></g><path d="M91.9 103.9L119.5 200.8L160.5 191.2L142.5 92.1Z" fill="var(--shirt)" /><circle cx="117.2" cy="98.0" r="26" fill="var(--shirt)" /><circle cx="140.0" cy="196.0" r="21" fill="var(--shirt)" /><path d="M125.2 98.8L128.0 70.8L112.0 69.2L109.2 97.2Z" fill="var(--flesh)" /><circle cx="117.2" cy="98.0" r="8" fill="var(--flesh)" /><circle cx="120.0" cy="70.0" r="8" fill="var(--flesh)" /><path d="M140.0 216.0L232.0 210.0L232.0 182.0L140.0 176.0Z" fill="var(--pants)" /><circle cx="140.0" cy="196.0" r="20" fill="var(--pants)" /><circle cx="232.0" cy="196.0" r="14" fill="var(--pants)" /><path d="M218.0 196.4L225.0 270.2L243.0 269.8L246.0 195.6Z" fill="var(--pants)" /><circle cx="232.0" cy="196.0" r="14" fill="var(--pants)" /><circle cx="234.0" cy="270.0" r="9" fill="var(--pants)" /><ellipse cx="246" cy="278" rx="16" ry="7.5" fill="#2b2b2b" /><path d="M111.3 120.0L172.2 146.2L179.8 129.8L120.7 100.0Z" fill="var(--flesh)" /><circle cx="116.0" cy="110.0" r="11" fill="var(--flesh)" /><circle cx="176.0" cy="138.0" r="9" fill="var(--flesh)" /><path d="M172.1 146.1L218.8 166.8L225.2 153.2L179.9 129.9Z" fill="var(--flesh)" /><circle cx="176.0" cy="138.0" r="9" fill="var(--flesh)" /><circle cx="222.0" cy="160.0" r="7.5" fill="var(--flesh)" /><circle cx="222" cy="160" r="8.5" fill="var(--flesh)" /><circle cx="120" cy="70" r="23" fill="var(--flesh)" /><path d="M97 73A23 23 0 0 1 141 62C126 64 112 64 97 73Z" fill="var(--hair)" /><circle cx="129" cy="73" r="2.6" fill="#2b2b2b" /></g>
  </g>
</g>
<rect x="62" y="30" width="22" height="262" rx="3" fill="#3a3a3c" /><text x="8" y="292" font-size="11" fill="#8E8E93" opacity="0.8" font-family="sans-serif">created by claude</text>
</svg>
