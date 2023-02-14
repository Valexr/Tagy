<script lang="ts" context="module">
    import { time, steps, sorted } from "$lib/stores";
    import { shuffle } from "$lib/actions.js";
    import gh from "../svg/gh.svg";
</script>

<header>
    <p>Time: {$time}</p>
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
