<script>
  export let dingbat = ''
</script>

<div class="dingbat">
  {@html dingbat}
</div>

<style>
  .dingbat {
    display: flex;
    font-size: 2rem;
    padding: 1rem;
    justify-content: space-around;
    background-color: rgba(255, 128, 128, 0.25);
    border: 1px solid darkgray;
    min-width: 300px;
  }

  :global(.dingbat-rotate-up) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  :global(.dingbat-rotate-down) {
    writing-mode: vertical-rl;
  }
</style>
