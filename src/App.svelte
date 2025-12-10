<script>
    import Header from './lib/Header.svelte';
    import BlogGrid from './lib/BlogGrid.svelte';
</script>

<Header />
<main>
    <div class="container">
        <BlogGrid />
    </div>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(:root) {
    --coffee-dark: #2c1810;
    --coffee-medium: #6f4e37;
    --coffee-light: #a67c52;
    --cream: #f5f1ed;
    --white: #ffffff;
    --accent: #d4a574;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--coffee-dark);
    background-color: var(--cream);
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  main {
    padding: 3rem 0;
  }
</style>
