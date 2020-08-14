<script>
  import { fade } from 'svelte/transition'
  import Input from './Input.svelte'
  import Results from './Results.svelte'
  import { data } from '../../stores/home'

  let results = null

  let value = ''

  function onReset() {
    results = null
    value = ''
  }

  function onSubmit() {
    results = $data.results
    if (value === '') results = null
  }
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    align-items: center;
  }

  .hint {
    font-size: 1.25rem;
    text-align: center;
    letter-spacing: 0.05rem;
    color: var(--primary-light);
    margin: 0 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  <Input bind:value on:submit={onSubmit} on:click={onReset} />
  {#if results}
    <Results {results} />
  {:else}
    <p class="hint">
      Hint: Try
      <b>listen</b>
      ,
      <b>listen*</b>
      ,
      <b>listen/</b>
      ,
      <b>ha.e</b>
      or
      <b>3</b>
    </p>
  {/if}
</div>
