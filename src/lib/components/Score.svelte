<script lang="ts" context="module">
    import { time, steps } from "$lib/stores";
    import gh from "$svg/gh.svg";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<header>
    <p>{$time}</p>
    <h1>
        <a href={repository.url} target="_blank" rel="noreferrer" id="gh">
            {@html gh}
        </a>
        {name}
    </h1>
    <p>Steps: {$steps}</p>
</header>
