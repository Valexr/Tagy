<script lang="ts" module>
    import { time, steps } from "$lib/stores";
    import gh from "$svg/gh.svg";
    import type { Name, Repository } from "$types";

    interface Props {
        name: Name;
        repository: Repository;
    }
</script>

<script lang="ts">
    let { name, repository }: Props = $props();
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
