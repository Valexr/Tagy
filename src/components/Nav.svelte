<script lang="ts" context="module">
    import { shuffle } from "$lib/actions";
    import { time, sorted } from "$lib/stores";
</script>

<script lang="ts">
    let state = "";

    function startGame() {
        shuffle($sorted);
        time.start(0);
        state = "play";
    }
    function pauseGame() {
        time.pause();
        state = "pause";
    }
    function resumeGame() {
        time.start();
        state = "play";
    }
    function stopGame() {
        shuffle($sorted);
        time.stop();
        state = "";
    }
</script>

<footer>
    <nav class:playing={state === "play"}>
        {#if state === "play"}
            <button on:click={stopGame}>Stop</button>
            <button on:click={pauseGame}>Pause</button>
        {:else}
            <button
                class="lg"
                on:click={state === "pause" ? resumeGame : startGame}
            >
                {state === "pause" ? "Resume" : "Start"}
            </button>
        {/if}
    </nav>
</footer>
