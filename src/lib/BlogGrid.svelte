<script>
  import ProjectCard from './ProjectCard.svelte'

  const projects = [
    {
      id: 4,
      title: 'Wordle',
      description: 'Solver for the Wordle game written in Python. At the time this was written, it was the most performant solution on the leading Wordle benchmark site.',
      tags: ['Python', 'Word Game'],
      link: 'https://github.com/boompig/wordle-py'
    },

    {
      id: 1,
      title: 'St Petersburg Board Game',
      description: 'Implementation of the St Petersburg board game.',
      tags: ['Board Game', 'Javascript', 'Angular'],
      link: 'https://boompig.github.io/st-petersburg/'
    },

    {
      id: 2,
      title: 'Machi Koro Board Game',
      description: 'Implementation of the Machi Koro board game.',
      tags: ['Board Game', 'Javascript', 'Angular'],
      link: 'https://boompig.github.io/machi-koro/'
    },

    {
      id: 3,
      title: 'Sudoku',
      description: 'Sudoku solver implementation in Python. Written mostly for a CSC384 assignment and since updated in minor ways.',
      tags: ['Python', 'CSP'],
      link: 'https://github.com/boompig/sudoku'
    },
  ]
</script>

<div class="project-grid">
  {#each projects as project (project.id)}
    <ProjectCard {...project} />
  {/each}
</div>

<style>
  .project-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }
</style>
