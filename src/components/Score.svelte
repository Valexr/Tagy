<script lang="ts" context="module">
    import { score, sorted } from "$lib/stores";
    import { shuffle } from "$lib/actions.js";
</script>

<header>
    <h3 class="counter">Steps: {$score}</h3>
    <h1>Tagy</h1>
    <nav>
        <button
            on:click={() => shuffle($sorted)}
            title="{$sorted ? 'Shuffle' : 'Sort'} the tiles"
        >
            {$sorted ? "Shuffle" : "Sort"}
        </button>
    </nav>
</header>
