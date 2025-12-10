<script>
    const {
        variant = 'primary',
        size = 'medium',
        disabled = false,
        href = undefined,
        type = 'button',
        onclick = undefined,
        children,
    } = $props();

    const Tag = href ? 'a' : 'button';
</script>

<svelte:element
    this={Tag}
    {href}
    {disabled}
    {type}
    class="btn btn-{variant} btn-{size}"
    {onclick}
>
    {@render children?.()}
</svelte:element>

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    text-decoration: none;
    border: 2px solid;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(44, 24, 16, 0.3);
  }

  .btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(44, 24, 16, 0.2);
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  /* Primary variant */
  .btn-primary {
    background-color: var(--coffee-medium);
    border-color: var(--coffee-medium);
    color: var(--white);
  }

  .btn-primary:hover {
    background-color: var(--coffee-dark);
    border-color: var(--coffee-dark);
  }

  /* Secondary variant */
  .btn-secondary {
    background-color: transparent;
    border-color: var(--coffee-medium);
    color: var(--coffee-medium);
  }

  .btn-secondary:hover {
    background-color: var(--coffee-medium);
    color: var(--white);
  }

  /* Accent variant */
  .btn-accent {
    background-color: var(--accent);
    border-color: var(--accent);
    color: var(--coffee-dark);
  }

  .btn-accent:hover {
    background-color: var(--coffee-light);
    border-color: var(--coffee-light);
  }

  /* Size variants */
  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .btn-medium {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  .btn-large {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
</style>
