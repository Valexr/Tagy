<script lang="ts" context="module">
    import Score from "$components/Score.svelte";
    import Board from "$components/Board.svelte";
</script>

<Score />
<main>
    <Board />
</main>
<footer>
    <p>Sort tiles: 1, 2, 3 ... 9 ... 12, 13 ... 15</p>
</footer>

<style>
    @import "app.css";
</style>
