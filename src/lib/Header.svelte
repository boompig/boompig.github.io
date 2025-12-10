<header>
    <div class="container">
        <div class="header-content">
            <div class="logo-title">
                <img src="/logo.svg" alt="kats.coffee logo" class="logo" />
                <h1><span class="site-title">kats.coffee</span></h1>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
            </nav>
        </div>
    </div>
</header>

<style>
  header {
    background-color: #e8d5c4;
    color: var(--coffee-dark);
    padding: 0.5rem 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .logo-title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  .site-title {
    color: var(--coffee-dark);
  }

  nav a {
    color: var(--coffee-dark);
    text-decoration: none;
    margin-left: 1.5rem;
    transition: color 0.3s;
  }

  nav a:hover {
    color: var(--coffee-medium);
  }
</style>
