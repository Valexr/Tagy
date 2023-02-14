<script lang="ts" context="module">
    import { time, steps } from "$lib/stores";
    import gh from "$svg/gh.svg";
</script>

<header>
    <p>{$time}</p>
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
