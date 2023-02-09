<script lang="ts" context="module">
    import { score, sorted } from "$lib/stores";
    import { shuffle, sort } from "$lib/actions.js";
</script>

<header>
    <h3 class="counter">Steps: {$score}</h3>
    <h1>Tagy</h1>
    <nav>
        <button
            on:click={$sorted ? shuffle : sort}
            title="{$sorted ? 'Shuffle' : 'Sort'} the tiles"
        >
            {$sorted ? "Shuffle" : "Sort"}
        </button>
    </nav>
</header>
