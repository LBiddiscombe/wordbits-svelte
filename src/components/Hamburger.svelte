<script lang="ts">
  export let checked: boolean = false
</script>

<style>
  input[type='checkbox'] {
    transition: all 0.2s;
    box-sizing: border-box;
    display: none;
  }

  .nav-icon {
    width: 2rem;
    z-index: 99;
    height: 2.5rem;
  }

  .nav-icon:after,
  .nav-icon:before,
  .nav-icon div {
    background-color: var(--brand-dark);
    border-radius: 3px;
    content: '';
    display: block;
    height: 0.25rem;
    margin: 0.5rem 0;
    transition: all 0.1s ease-in-out;
  }

  .checked.nav-icon:before {
    transform: translateY(12px) rotate(45deg);
  }

  .checked.nav-icon:after {
    transform: translateY(-12px) rotate(-45deg);
  }

  .checked.nav-icon div {
    transform: scale(0);
  }
</style>

<label class="nav-icon" class:checked>
  <input type="checkbox" bind:checked />
  <div />
</label>
