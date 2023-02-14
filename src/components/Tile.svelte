<script lang="ts" context="module">
    import { move } from "$lib/actions";
    import { positions, steps, sorted } from "$lib/stores.js";
</script>

<script lang="ts">
    export let number: number;

    function moveTile() {
        const movable =
            $positions[number].n === $positions[0].n ||
            $positions[number].m === $positions[0].m;
        if (movable && !$sorted) {
            move(number);
            $steps += 1;
        }
    }
</script>

<button
    class="tile"
    on:click={moveTile}
    style="transform:translate({$positions[number].n * 100}%, {$positions[
        number
    ].m * 100}%)"
>
    {number}
</button>
