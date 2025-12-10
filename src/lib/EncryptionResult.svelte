<script>
  let { result = "" } = $props();
</script>

{#if result}
  <div class="result-section">
    <h3>Encryption Result</h3>
    <pre class="encrypted-output">{result}</pre>
  </div>
{/if}

<style>
  .result-section {
    margin-top: 2rem;
    padding: 2rem;
    background-color: var(--white);
    border: 2px solid var(--accent);
    border-radius: 12px;
  }

  .result-section h3 {
    margin-bottom: 1rem;
    color: var(--coffee-dark);
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .encrypted-output {
    background-color: var(--cream);
    border: 2px solid var(--coffee-light);
    border-radius: 8px;
    padding: 1rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: var(--coffee-dark);
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-all;
  }
</style>