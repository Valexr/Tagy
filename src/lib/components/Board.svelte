<script lang="ts" context="module">
    import Tile from "$lib/components/Tile.svelte";
</script>

<script lang="ts">
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
</script>

<main>
    <section id="board">
        {#each numbers as index}
            <Tile {index} />
        {/each}
    </section>
</main>
