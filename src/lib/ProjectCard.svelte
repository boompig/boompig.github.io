<script>
  export let title
  export let description
  export let tags
  export let link
</script>

<article class="project-card">
  <h3 class="project-title">{title}</h3>
  <p class="project-description">{description}</p>
  <div class="tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
  <a href={link} class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
</article>

<style>
  .project-card {
    background: var(--white);
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  .project-title {
    font-size: 1.8rem;
    color: var(--coffee-dark);
    margin-bottom: 1rem;
  }

  .project-description {
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

  .project-link {
    display: inline-block;
    color: var(--coffee-medium);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
  }

  .project-link:hover {
    color: var(--coffee-light);
  }

  @media (max-width: 768px) {
    .project-title {
      font-size: 1.5rem;
    }
  }
</style>
