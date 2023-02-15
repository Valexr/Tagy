<script lang="ts" context="module">
    import Score from "$lib/components/Score.svelte";
    import Board from "$lib/components/Board.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import type { Name, Repository } from "$types";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<Score {name} {repository} />
<Board />
<Nav />

<style>
    @import "app.css";
</style>
