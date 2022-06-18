<script>
    import { afterUpdate } from 'svelte';
    import { positions, isSorted } from './model/stores.js';

    export let number;

    let tileElement;

    $: isMovable = $positions[number].n === $positions[0].n || $positions[number].m === $positions[0].m;

    afterUpdate( () => {
        if (isMovable) tileElement.tabIndex = 4*$positions[number].m + $positions[number].n + 1;
        else if (tileElement.tabIndex !== -1) tileElement.removeAttribute('tabindex');
    } );
</script>

<div
    class='tileWrapper'
    style='transform:translate({$positions[number].n*100}%, {$positions[number].m*100}%)'
>
    <div
        class='tile'
        class:responsive={isMovable && !$isSorted}
        bind:this={tileElement}
    >
        {number}
    </div>
</div>
