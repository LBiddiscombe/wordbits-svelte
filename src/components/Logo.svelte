<style>
  .square {
    position: relative;
    width: 3rem;
    height: 3rem;
    border: 1px solid #ccc;
    overflow: hidden;
    display: flex;
    background-color: var(--text-light);
    align-items: center;
  }

  .letter {
    flex: 1;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    background-color: var(--brand-accent);
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255, 255, 255, 0.4);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
  }
</style>

<div class="square">
  <span class="letter">W</span>
</div>
