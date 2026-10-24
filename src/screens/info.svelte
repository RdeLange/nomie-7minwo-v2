<script lang="ts">
  let { back }: { back: () => void } = $props();
</script>

<section class="card">
  <p class="caption">About</p>
  <p>A bodyweight workout of seven minutes, from the book <em>7 Minutes to Fit</em> by Brett Klika. Choose the length and the part of the body, and follow the exercises on screen.</p>
  <p>The animations and the idea of the app are taken from Barebone Workout by Bumhan Yu, <a href="https://github.com/baadaa/barebone-workout">github.com/baadaa/barebone-workout</a>.</p>
</section>

<section class="card">
  <p class="caption">How the timers work</p>
  <p>The session has one clock. The timer of the exercise is taken from the same clock, so the two always agree, also after a pause or a skip.</p>
</section>

<button class="ghost" onclick={back}>Back</button>

<style>
  .card { padding: 14px 16px; border-radius: 16px; background: var(--card); margin: 12px 0; line-height: 1.45; }
  .card p { margin: 6px 0; }
  .caption { font-size: calc(13px * var(--scale)); font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; }
  a { color: var(--tint); }
  .ghost { display: block; width: 100%; margin-top: 8px; padding: 12px; border: 0; border-radius: 12px; background: var(--fill); color: var(--text); font: inherit; font-weight: 600; cursor: pointer; }
</style>
