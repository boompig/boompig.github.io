<script>
    import ProjectCard from './ProjectCard.svelte';

    const projects = [
        {
            id: 4,
            title: 'Wordle',
            description: 'Solver for the Wordle game written in Python. At the time this was written, it was the most performant solution on the leading Wordle benchmark site.',
            tags: ['Python', 'Word Game'],
            github: 'https://github.com/boompig/wordle-py',
            date: '2022',
        },

        {
            id: 1,
            title: 'St Petersburg Board Game',
            description: 'Implementation of the St Petersburg board game.',
            tags: ['Board Game', 'Javascript', 'Angular'],
            website: 'https://boompig.github.io/st-petersburg/',
            github: 'https://github.com/boompig/st-petersburg',
            date: '2018',
        },

        {
            id: 2,
            title: 'Machi Koro Board Game',
            description: 'Implementation of the Machi Koro board game.',
            tags: ['Board Game', 'Javascript', 'Angular'],
            website: 'https://boompig.github.io/machi-koro/',
            github: 'https://github.com/boompig/machi-koro',
            date: '2015',
        },

        {
            id: 3,
            title: 'Sudoku',
            description: 'Sudoku solver implementation in Python. Written mostly for a CSC384 assignment and since updated in minor ways.',
            tags: ['Python', 'CSP'],
            github: 'https://github.com/boompig/sudoku',
            date: '2012',
        },
    ];
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
