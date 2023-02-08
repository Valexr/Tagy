<svelte:body on:click="{clickHandler}" on:keydown="{keyDownHandler}" />

<h1 class="visuallyHidden">The 15-puzzle game</h1>

<main>
    {#if !isAboutVisible}
        <section class="board">
            <h2 class="visuallyHidden">The game board</h2>
            <button
                class="shuffleBtn"
                class:hidden="{!$isSorted}"
                title="Shuffle the tiles"
            >
                <span class="visuallyHidden">Shuffle</span>
            </button>
            <button
                class="openAboutBtn"
                title="Display information about the game"
            >
                <span class="visuallyHidden">Information</span>
            </button>
            <h2 class="counter">{count}</h2>
            <Board />
        </section>
    {:else}
        <section class="textSection about">
            <h2 class="visuallyHidden">Information about the game</h2>
            <button class="closeAboutBtn" title="Return to the game board">
                <span class="visuallyHidden">Close</span>
            </button>
            <div class="textWrapper">
                <div class="textContainer">
                    <h3>Rules</h3>
                    <p>Place the tiles in ascending order.</p>
                    <h3>Hints</h3>
                    <p>
                        Sort the first two rows, then place the «9» and the «13»
                        tile on their destination places, finally sort remaining
                        tiles.
                    </p>
                </div>
            </div>
        </section>
    {/if}
</main>

<script lang="ts">
    import { isSorted } from '$lib/stores.js';
    import { shuffle, move } from '$lib/actions.js';
    import Board from '$components/Board.svelte';

    let count = 0;

    let isAboutVisible = false;

    const moveTiles = (number: number) => move(number);

    const toggleAboutVisibility = () => (isAboutVisible = !isAboutVisible);

    const clickHandler = (e: MouseEvent) => {
        const { classList, firstChild, className } = e.target;
        if (classList.contains('responsive')) {
            moveTiles(firstChild.textContent);
            count += 1;
        } else if (className === 'shuffleBtn') {
            shuffle();
        } else if (
            className === 'openAboutBtn' ||
            className === 'closeAboutBtn'
        ) {
            toggleAboutVisibility();
        }
    };

    const keyDownHandler = (e: KeyboardEvent) => {
        const { classList, firstChild } = e.target;
        if (
            classList.contains('responsive') &&
            (e.key === 'Enter' || e.key === ' ')
        ) {
            moveTiles(firstChild.textContent);
        } else if (isAboutVisible && e.key === 'Escape')
            toggleAboutVisibility();
    };
</script>
