<script lang="ts" context="module">
    import { score } from "$lib/stores";
    import { shuffle } from "$lib/actions.js";
</script>

<header>
    <h3 class="counter">Steps: {$score}</h3>
    <h1>Tagy</h1>
    <button on:click={shuffle} title="Shuffle the tiles"> Shuffle </button>
</header>
