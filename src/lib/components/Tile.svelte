<script lang="ts" context="module">
    import { game, positions, steps, sorted } from "$lib/stores.js";
</script>

<script lang="ts">
    export let index: number;

    function moveTile() {
        if ($game === "play" && game.movable(index) && !$sorted) {
            game.move(index);
            $steps += 1;
        }
    }
</script>

<button
    class="tile"
    on:click={moveTile}
    style="transform:translate({$positions[index].n * 100}%, {$positions[index]
        .m * 100}%)"
>
    {index}
</button>
