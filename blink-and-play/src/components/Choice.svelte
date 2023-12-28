<script>
    import Cards from "./Cards.svelte";
    export let onChoice = false;
    export let cardInfo = {};
    let mode = {};
    let arr = [];
    let imageModules;

    $: {
        if(mode.type === "pre"){
            console.log("Card Type:", cardInfo.type);
            console.log("Pre-Made chosen")
        }else if(mode.type === "get"){
            console.log("Card Type:", cardInfo.type);
            console.log("Get it done chosen")
        }else{
            console.log("Actions chosen")
        }
    }

    if (cardInfo.type === "actions") {
        imageModules = import.meta.glob("/src/assets/actions/*.webp");
    } else if (cardInfo.type === "drinks") {
        imageModules = import.meta.glob("/src/assets/drinks/*.webp");
    } else if (cardInfo.type === "foods") {
        imageModules = import.meta.glob("/src/assets/foods/*.webp");
    }

    for (const key in imageModules) {
        imageModules[key]().then(({ default: imageUrl }) => {
            const fileNameWithExtension = key.split('/').pop(); 
            const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
            arr.push({ fileName: fileNameWithoutExtension, imageUrl });
        });
    }   

    function modeChoice(choice){
        mode = {type: choice}
        onChoice = false;
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
{:else if cardInfo.type === "actions"}
    <pre class="relative flex flex-row top-10 justify-center">
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
            {#each arr as src}
                <Cards
                    imgSrc={src.imageUrl}
                    imgAlt={src.fileName}
                    imgHeader={src.fileName}
                />
            {/each}
        </section>
    </pre>
{:else if cardInfo.type === "drinks"}
    {#if mode.type === "pre"}
        <pre class="relative flex flex-row top-10 justify-center">
            <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
                {#each arr as src}
                    <Cards
                        imgSrc={src.imageUrl}
                        imgAlt={src.fileName}
                        imgHeader={src.fileName}
                    />
                {/each}
            </section>
        </pre>
    {/if}
{:else if cardInfo.type === "foods"}
    {#if mode.type === "pre"}
        <pre class="relative flex flex-row top-10 justify-center">
            <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
                {#each arr as src}
                    <Cards
                        imgSrc={src.imageUrl}
                        imgAlt={src.fileName}
                        imgHeader={src.fileName}
                    />
                {/each}
            </section>
        </pre>
    {/if}
{/if}