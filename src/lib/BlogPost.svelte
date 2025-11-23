<script>
  export let date
  export let title
  export let excerpt
  export let tags
</script>

<article class="blog-post">
  <div class="post-meta">{date}</div>
  <h3 class="post-title">{title}</h3>
  <p class="post-excerpt">{excerpt}</p>
  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
  <a href="#" class="read-more">Read more →</a>
</article>

<style>
  .blog-post {
    background: var(--white);
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .blog-post:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  .post-meta {
    color: var(--coffee-medium);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .post-title {
    font-size: 1.8rem;
    color: var(--coffee-dark);
    margin-bottom: 1rem;
  }

  .post-excerpt {
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  .tags {
    margin-bottom: 1rem;
  }

  .tag {
    display: inline-block;
    background: var(--cream);
    color: var(--coffee-medium);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }

  .read-more {
    display: inline-block;
    color: var(--coffee-medium);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
  }

  .read-more:hover {
    color: var(--coffee-light);
  }

  @media (max-width: 768px) {
    .post-title {
      font-size: 1.5rem;
    }
  }
</style>
