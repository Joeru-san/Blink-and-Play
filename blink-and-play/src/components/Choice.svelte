<script>
    import Cards from "./Cards.svelte";
    export let onChoice = false;
    export let cardInfo = {};
    let mode = "";

    $: {
        // Puoi utilizzare cardInfo.type per ottenere il tipo di card selezionata
        if(mode === "pre"){
            console.log("Card Type:", cardInfo.type);
            console.log("Pre-Made chosen")
        }else if(mode === "get"){
            console.log("Card Type:", cardInfo.type);
            console.log("Get it done chosen")
        }
    }

    function modeChoice(choice){
        mode=choice
        onChoice=false;
    }
</script>

{#if onChoice}
    <choice class="relative flex flex-row top-10 justify-center">
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-52">
            <Cards
                imgSrc="src/assets/pre-made.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria pre made"
                imgHeader="Pre-Made"
                cardAction="{() => modeChoice("pre")}"
            />
        
            <Cards 
                imgSrc="src/assets/get-it-done.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria get it done"
                imgHeader="Get it Done"
                cardAction="{() => modeChoice("get")}"
            />
        </section>
    </choice>
{/if}
    
{#if cardInfo.type === "azioni"}
    <!-- Renderizza informazioni specifiche per Azioni -->
    {#if mode == "pre"}
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            <Cards
                imgSrc="src/assets/pre-made.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria pre made"
                imgHeader="Pre-Made"
                cardAction={() => modeChoice("pre")}
            />
    
            <Cards 
                imgSrc="src/assets/get-it-done.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria get it done"
                imgHeader="Get it Done"
                cardAction={() => modeChoice("get")}
            />

            <Cards
                imgSrc="src/assets/pre-made.png"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria pre made"
                imgHeader="Pre-Made"
                cardAction={() => modeChoice("pre")}
            />
        </section>
    {/if}
{:else if cardInfo.type === "bere"}
    <!-- Renderizza informazioni specifiche per Bere -->
    <h1>bere</h1>
{:else if cardInfo.type === "mangiare"}
    <!-- Renderizza informazioni specifiche per Mangiare -->
    <h1>mangiare</h1>
{/if}