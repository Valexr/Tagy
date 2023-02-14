<script lang="ts" context="module">
    import { shuffle } from "$lib/actions";
    import { time, game, steps, sorted } from "$lib/stores";
</script>

<script lang="ts">
    function startGame() {
        shuffle($sorted);
        time.start(0);
        $game = "play";
    }
    function pauseGame() {
        time.pause();
        $game = "pause";
    }
    function resumeGame() {
        time.start();
        $game = "play";
    }
    function stopGame() {
        shuffle($sorted);
        time.stop();
        $steps = 0;
        $game = "";
    }
</script>

<footer>
    <nav class:playing={$game === "play"}>
        {#if $game === "play"}
            <button on:click={stopGame}>Stop</button>
            <button on:click={pauseGame}>Pause</button>
        {:else}
            <button
                class="lg"
                on:click={$game === "pause" ? resumeGame : startGame}
            >
                {$game === "pause" ? "Resume" : "Start"}
            </button>
        {/if}
    </nav>
</footer>
