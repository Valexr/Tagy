<script lang="ts" context="module">
    import { score, steps, sorted } from "$lib/stores";
    import { shuffle } from "$lib/actions.js";
    import gh from "../svg/gh.svg";
</script>

<header>
    <p>Score: {$score}</p>
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
    <p>Steps: {$steps}</p>
</header>
