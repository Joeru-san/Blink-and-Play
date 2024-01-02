<script>
    import { fade } from "svelte/transition";
    import Cards from "./Cards.svelte";
    import { onMount } from "svelte";
  
    export let onChoice;
  
    function handleCardClick(cardType) {
      onChoice(cardType);
    }
  
    let fadeIn = false;
  
    onMount(() => {
      fadeIn = true;
    });
</script>
  {#if fadeIn}
    <main transition:fade={{ duration: 400 }} class="relative flex flex-row top-10 justify-center">
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
            <Cards
              imgSrc="/src/assets/core-actions/actions.png"
              imgAlt="Actions category"
              imgHeader="Actions"
              cardAction={() => handleCardClick("actions")}
            />
      
            <Cards
              imgSrc="/src/assets/core-actions/drinks.png"
              imgAlt="Drinks category"
              imgHeader="Drinks"
              cardAction={() => handleCardClick("drinks")}
            />
      
            <Cards
              imgSrc="/src/assets/core-actions/foods.png"
              imgAlt="Foods category"
              imgHeader="Foods"
              cardAction={() => handleCardClick("foods")}
            />
        </section>
    </main>
  {/if}
  