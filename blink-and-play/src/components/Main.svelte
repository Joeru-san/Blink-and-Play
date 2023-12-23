<script>
    import Cards from "./Cards.svelte";
    import Choice from "./Choice.svelte";
    import { createEventDispatcher } from 'svelte';
    
    let showChoice = false;

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('showChoice');
    }
</script>

<main class="relative flex flex-row top-10 justify-center">
    <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
        <Cards 
            imgSrc="/src/assets/core-actions/azione.png" 
            imgAlt="Azione" 
            imgHeader="Azioni"
            cardAction="{handleClick}"
        />

        <Cards 
            imgSrc="/src/assets/core-actions/bere.png" 
            imgAlt="Bere" 
            imgHeader="Bere"
        />

        <Cards 
            imgSrc="/src/assets/core-actions/mangiare.png" 
            imgAlt="Mangiare" 
            imgHeader="Mangiare"
        />
    </section>
</main>
