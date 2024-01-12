<script>
    import { fade } from "svelte/transition";
    import Cards from "./Cards.svelte";
    import { onMount } from "svelte";
    import { applyThemeClass, selectedThemeValue, toggleTheme } from '../themeStore.js';

export let onChoice;

function handleCardClick(cardType) {
    onChoice(cardType);
}

let fadeIn = false;

onMount(() => {
    fadeIn = true;
    toggleTheme();
});
</script>

{#if fadeIn}
	<main transition:fade={{ duration: 400 }} class="relative flex flex-row top-10 justify-center items-center">
		<section class="justify-around grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10">
			<Cards
				imgSrc="/core-actions/actions.webp"
				imgAlt="Actions category"
				imgHeader="Actions"
				cardAction={() => handleCardClick("actions")}
			/>

			<Cards
				imgSrc="/core-actions/drinks.webp"
				imgAlt="Drinks category"
				imgHeader="Drinks"
				cardAction={() => handleCardClick("drinks")}
			/>

			<Cards
				imgSrc="/core-actions/foods.webp"
				imgAlt="Foods category"
				imgHeader="Foods"
				cardAction={() => handleCardClick("foods")}
			/>
		</section>
	</main>
{/if}
  
<style>
	@import '../app.css';
</style>