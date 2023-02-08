{#each numbers as number}
    <Tile number="{number}" />
{/each}

<script>
    import Tile from '$components/Tile.svelte';

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
</script>
