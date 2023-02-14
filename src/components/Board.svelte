<script lang="ts" context="module">
    import Tile from "$components/Tile.svelte";
</script>

<script lang="ts">
    const numbers = Array.from({ length: 15 }, (_, i) => i + 1);
</script>

<main>
    <section id="board">
        {#each numbers as number}
            <Tile {number} />
        {/each}
    </section>
</main>
