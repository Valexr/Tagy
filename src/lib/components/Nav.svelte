<script lang="ts" module>
    import { game, sorted } from "$lib/stores";
</script>

<script lang="ts">
    $effect(() => {
        if ($sorted) game.stop();
    });
</script>

<footer>
    <nav class:playing={$game === "play"}>
        {#if $game === "play"}
            <button onclick={game.stop}>Stop</button>
            <button onclick={game.pause}>Pause</button>
        {:else}
            <button
                class="lg"
                onclick={$game === "pause" ? game.resume : game.start}
            >
                {$game === "pause" ? "Resume" : "Start"}
            </button>
        {/if}
    </nav>
</footer>
