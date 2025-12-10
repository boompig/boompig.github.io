<script>
    let {
        type = 'text',
        placeholder = '',
        value = $bindable(''),
        disabled = false,
        required = false,
        id = '',
        name = '',
        variant = 'default',
        size = 'medium',
        label = '',
        error = '',
        oninput = undefined,
        onchange = undefined,
        onkeydown = undefined,
    } = $props();

    let focused = $state(false);
</script>

{#if label}
    <label for={id} class="input-label">{label}</label>
{/if}

<div class="input-wrapper input-{variant} input-{size}" class:focused class:error>
    <input
        {type}
        {placeholder}
        {disabled}
        {required}
        {id}
        {name}
        bind:value
        onfocus={() => focused = true}
        onblur={() => focused = false}
        {oninput}
        {onchange}
        {onkeydown}
    />
</div>

{#if error}
    <span class="error-message">{error}</span>
{/if}

<style>
  .input-label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    color: var(--coffee-dark);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .input-wrapper {
    position: relative;
    border: 2px solid;
    border-radius: 8px;
    transition: all 0.2s ease;
    background-color: var(--cream);
  }

  .input-wrapper:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(44, 24, 16, 0.1);
  }

  .input-wrapper.focused {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(44, 24, 16, 0.2);
  }

  .input-wrapper.error {
    border-color: #d73527;
    background-color: #fef2f2;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: 'Space Mono', monospace;
    color: var(--coffee-dark);
    font-size: inherit;
  }

  input::placeholder {
    color: var(--coffee-light);
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Variant styles */
  .input-default {
    border-color: var(--coffee-light);
  }

  .input-default.focused {
    border-color: var(--coffee-medium);
  }

  .input-accent {
    border-color: var(--accent);
    background-color: var(--white);
  }

  .input-accent.focused {
    border-color: var(--coffee-medium);
  }

  /* Size variants */
  .input-small {
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  .input-medium {
    padding: 0.75rem;
    font-size: 0.875rem;
  }

  .input-large {
    padding: 1rem;
    font-size: 1rem;
  }

  .error-message {
    display: block;
    margin-top: 0.25rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: #d73527;
    font-weight: 400;
  }
</style>
