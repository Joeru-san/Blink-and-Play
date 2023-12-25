<script>
    import Cards from "./Cards.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    
    export let onChoice;
</script>

<main class="relative flex flex-row top-10 justify-center">
    <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
        <Cards 
            imgSrc="/src/assets/core-actions/azione.png" 
            imgAlt="Azione" 
            imgHeader="Azioni"
            cardAction="{onChoice}"
        />

        <Cards 
            imgSrc="/src/assets/core-actions/bere.png" 
            imgAlt="Bere" 
            imgHeader="Bere"
            cardAction="{onChoice}"
        />

        <Cards 
            imgSrc="/src/assets/core-actions/mangiare.png" 
            imgAlt="Mangiare" 
            imgHeader="Mangiare"
            cardAction="{onChoice}"
        />
    </section>
</main>