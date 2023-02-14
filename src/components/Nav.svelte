<script lang="ts" context="module">
    import { shuffle } from "$lib/actions";
    import { score, sorted } from "$lib/stores";
</script>

<script lang="ts">
    shuffle($sorted);
</script>

<footer>
    <nav class:playing={!$sorted}>
        {#if !$sorted}
            <button on:click={() => shuffle($sorted)}>Sort</button>
        {:else}
            <button class="lg" on:click={() => shuffle()}>Shuffle</button>
        {/if}
    </nav>
</footer>
