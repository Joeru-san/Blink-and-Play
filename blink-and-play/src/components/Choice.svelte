<script>
    import Cards from "./Cards.svelte";
    export let onChoice = false;
</script>

{#if onChoice}
    <choice class="relative flex flex-row top-10 justify-center">
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-52">
            <Cards
                imgSrc="src/assets/pre-made.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria pre made"
                imgHeader="Pre-Made"
            />
            <Cards 
                imgSrc="src/assets/get-it-done.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria get it done"
                imgHeader="Get it Done"
            />
        </section>
    </choice>
{/if}