<script>
    import Cards from "./Cards.svelte";
    export let onChoice;
    
    function handleCardClick(cardType) {
        onChoice(cardType);
    }

</script>

<main class="relative flex flex-row top-10 justify-center">
    <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
        <Cards 
            imgSrc="/src/assets/core-actions/azione.png" 
            imgAlt="Azione" 
            imgHeader="Azioni"
            cardAction={() => handleCardClick("azioni")}
        />

        <Cards 
            imgSrc="/src/assets/core-actions/bere.png" 
            imgAlt="Bere" 
            imgHeader="Bere"
            cardAction={() => handleCardClick("bere")}
        />

        <Cards 
            imgSrc="/src/assets/core-actions/mangiare.png" 
            imgAlt="Mangiare" 
            imgHeader="Mangiare"
            cardAction={() => handleCardClick("mangiare")}
        />
    </section>
</main>
