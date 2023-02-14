<script lang="ts" context="module">
    import { game, sorted } from "$lib/stores";
</script>

<script lang="ts">
    $: $sorted && game.stop();
</script>

<footer>
    <nav class:playing={$game === "play"}>
        {#if $game === "play"}
            <button on:click={game.stop}>Stop</button>
            <button on:click={game.pause}>Pause</button>
        {:else}
            <button
                class="lg"
                on:click={$game === "pause" ? game.resume : game.start}
            >
                {$game === "pause" ? "Resume" : "Start"}
            </button>
        {/if}
    </nav>
</footer>
