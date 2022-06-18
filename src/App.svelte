<script>
	import Board from './Board.svelte';
	import { isSorted } from './model/stores.js';
	import { shuffle, move } from './model/actions.js';

	const ENTER_KEY = 13;
	const ESCAPE_KEY = 27;
	const SPACE_KEY = 32;

	// let count = 0

	let isAboutVisible = false;

	const moveTiles = number => move(number);

	const toggleAboutVisibility = () => isAboutVisible = !isAboutVisible;

	const clickHandler = event => {
		// moving tile(s)
		if (event.target.classList.contains('responsive')) {
			moveTiles(event.target.firstChild.textContent);
			// count += 1
		}
		// shuffling
		else if (event.target.className === 'shuffleBtn') {
			shuffle();
		}
		// opening and closing 'about' section
		else if (event.target.className === 'openAboutBtn' || event.target.className === 'closeAboutBtn') {
			toggleAboutVisibility();
		}
	};

	const keyDownHandler = event => {
		// moving tile(s)
		if (event.target.classList.contains('responsive') && (event.which === ENTER_KEY || event.which === SPACE_KEY)) {
			moveTiles(event.target.firstChild.textContent);
		}
		// closing about section
		else if (isAboutVisible && event.which === ESCAPE_KEY) toggleAboutVisibility();
	};
</script>

<svelte:body on:click={clickHandler} on:keydown={keyDownHandler}/>

<h1 class='visuallyHidden'>The 15-puzzle game</h1>

{#if !isAboutVisible}
	<section class='board'>
		<h2 class='visuallyHidden'>The game board</h2>
		<button class='shuffleBtn' class:hidden={!$isSorted} title='Shuffle the tiles'>
			<span class='visuallyHidden'>Shuffle</span>
		</button>
		<!-- <button class='openAboutBtn' title='Display information about the game'>
			<span class='visuallyHidden'>Information</span>
		</button> -->
		<!-- <h2 class="counter">{count}</h2> -->
		<Board/>
	</section>
{:else}
	<section class='textSection about'>
		<h2 class='visuallyHidden'>Information about the game</h2>
		<button class='closeAboutBtn' title='Return to the game board'>
			<span class='visuallyHidden'>Close</span>
		</button>
		<div class='textWrapper'>
			<div class='textContainer'>
				<h3>Rules</h3>
				<p>Place the tiles in ascending order.</p>
				<h3>Hints</h3>
				<p>Sort the first two rows, then place the «9» and the «13» tile on their destination places, finally sort remaining tiles.</p>
			</div>
		</div>
	</section>
{/if}
