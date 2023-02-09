<script lang="ts" context="module">
    import { score, sorted } from "$lib/stores";
    import { shuffle } from "$lib/actions.js";
    import gh from "../svg/gh.svg";
</script>

<header>
    <h3 class="counter">Steps: {$score}</h3>
    <h1>
        <a
            href="https://github.com/Valexr/Tagy"
            target="_blank"
            rel="noreferrer"
            id="gh"
        >
            {@html gh}
        </a>
        Tagy
    </h1>
    <nav>
        <button
            on:click={() => shuffle($sorted)}
            title="{$sorted ? 'Shuffle' : 'Sort'} the tiles"
        >
            {$sorted ? "Shuffle" : "Sort"}
        </button>
    </nav>
</header>
