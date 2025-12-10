<script>
  import Header from "../lib/Header.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />
<main>
  <div class="container">
    <slot />
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
    font-family: "Space Mono", monospace;
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
