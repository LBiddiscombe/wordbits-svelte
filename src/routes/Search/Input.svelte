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
    width: 100%;
    max-width: 480px;
    align-self: center;
  }

  input {
    border: 1px solid var(--separator);
    height: 2.5rem;
    letter-spacing: 0.1rem;
    border-radius: 0;
    padding-left: 2.5rem;
    color: var(--primary-dark);
    background-color: var(--primary-light);
    flex: 1;
    font-size: 1.25rem;
    -webkit-appearance: none;
  }

  .submit {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border: 0;
    padding: 0px;
    color: var(--separator);
    font-size: 1.25rem;
  }

  .reset {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0;
    display: inline-block;
    background: none;
    color: var(--primary-dark);
    border: none;
  }
</style>

<form on:submit|preventDefault autoComplete="off">
  <input bind:this={input} bind:value maxLength="15" autoComplete="off" />
  {#if value}
    <button type="reset" class="reset" on:click|preventDefault>
      <Icon data={faTimes} scale="1.5" class="icon" />
    </button>
  {/if}
  <div class="submit">
    <Icon data={faSearch} scale="1.5" class="icon" />
  </div>
</form>
