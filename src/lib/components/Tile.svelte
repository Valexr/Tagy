<script lang="ts" module>
    import { game, positions, steps, sorted } from "$lib/stores.js";
</script>

<script lang="ts">
    let { index = 0 } = $props();

    function moveTile() {
        if ($game === "play" && game.movable(index) && !$sorted) {
            game.move(index);
            $steps += 1;
        }
    }
</script>

{#if index}
    {@const X = $positions[index].n * 100}
    {@const Y = $positions[index].m * 100}
    <button
        class="tile"
        onclick={moveTile}
        style="transform: translate({X}%, {Y}%)"
    >
        {index}
    </button>
{/if}
