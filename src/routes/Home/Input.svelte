<script>
  import Icon from 'svelte-awesome'
  import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
  export let value

  let input
</script>

<style>
  form {
    margin-top: 1rem;
    display: flex;
    position: relative;
  }

  input {
    border: 1px solid;
    height: 2.5rem;
    letter-spacing: 0.1rem;
    border-radius: 0;
    flex: 1;
    font-size: 1.25rem;
  }

  .submit {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--text-light);
    background-color: var(--brand-dark);
    margin-left: 0.5rem;
    border: 0;
    padding: 0px;
    font-size: 1.25rem;
  }

  .reset {
    position: absolute;
    top: 0.5rem;
    right: 3.5rem;
    padding: 0;
    opacity: 0.5;
    display: inline-block;
    background: none;
    border: none;
  }
</style>

<form on:submit|preventDefault autoComplete="off">
  <input bind:this={input} bind:value maxLength="20" autoComplete="off" />
  {#if value}
    <button type="reset" class="reset" on:click|preventDefault>
      <Icon data={faTimes} scale="1.5" class="icon" />
    </button>
  {/if}
  <button type="submit" class="submit">
    <Icon data={faSearch} scale="1" class="icon" />
  </button>
</form>
