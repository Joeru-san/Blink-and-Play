<script>
    import { fade } from "svelte/transition";
    import Cards from "./Cards.svelte";
    import Chip from "./Chip.svelte";
    export let onChoice = false;
    let sentence = "I want a ";
    export let cardInfo = {};
    let mode = {};
    let preArr = [];
    let getArr = [];
    let chipArr = [];
    let preImages;
    let baseImages;
    let chipImages;

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
        preImages = import.meta.glob("/src/assets/actions/*.webp");
        baseImages = import.meta.glob("/src/assets/get-it-done/actions/base/*.webp");
    } else if (cardInfo.type === "drinks") {
        preImages = import.meta.glob("/src/assets/drinks/*.webp");
        baseImages = import.meta.glob("/src/assets/get-it-done/drinks/base/*.webp");
        chipImages = import.meta.glob("/src/assets/get-it-done/drinks/beverages/*.webp");
    } else if (cardInfo.type === "foods") {
        preImages = import.meta.glob("/src/assets/foods/*.webp");
        baseImages = import.meta.glob("/src/assets/get-it-done/foods/base/*.webp");
        chipImages = import.meta.glob("/src/assets/get-it-done/foods/toppings/*.webp");
    }

    for (const key in preImages) {
        preImages[key]().then(({ default: imageUrl }) => {
            const fileNameWithExtension = key.split('/').pop(); 
            const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
            preArr.push({ fileName: fileNameWithoutExtension, imageUrl });
        });
    }   

    for (const key in baseImages) {
        baseImages[key]().then(({ default: imageUrl }) => {
            const fileNameWithExtension = key.split('/').pop(); 
            const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
            getArr.push({ fileName: fileNameWithoutExtension, imageUrl });
        });
    }   

    for (const key in chipImages) {
        chipImages[key]().then(({ default: imageUrl }) => {
            const fileNameWithExtension = key.split('/').pop(); 
            const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
            chipArr.push({ fileName: fileNameWithoutExtension, imageUrl });
        });
    }  

    function modeChoice(choice){
        mode = {type: choice}
        onChoice = false;
    }

    function composeSentence(component){
        sentence+=component;
        console.log(sentence)
    }
</script>
{#if onChoice}
    <choice class="relative flex flex-row top-10 justify-center">
        <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-52">
            <Cards
                imgSrc="/pre-made.webp"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria pre made"
                imgHeader="Pre-Made"
                cardAction="{() => modeChoice("pre")}"
            />
        
            <Cards 
                imgSrc="/get-it-done.webp"
                imgAlt="Immagine che rappresenta come sarà il layout della categoria get it done"
                imgHeader="Get it Done"
                cardAction="{() => modeChoice("get")}"
            />
        </section>
    </choice>
{:else if cardInfo.type === "actions" || cardInfo.type === "drinks" || cardInfo.type === "foods"}
    {#if mode.type === "pre"}
    <div transition:fade>
        <pre class="relative flex flex-row top-10 justify-center">
            <section class="justify-evenly max-w-full grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-52">
                {#each preArr as src}
                    <Cards
                        imgSrc={src.imageUrl}
                        imgAlt={src.fileName}
                        imgHeader={src.fileName}
                        cardAction={()=>{
                            var utterance = new SpeechSynthesisUtterance(src.fileName);
                            utterance.rate = 0.5;
                            utterance.pitch = 0.6;
                            speechSynthesis.speak(utterance);
                        }}
                    />
                {/each}
            </section>
        </pre>
    </div>
    {:else if mode.type === "get"}
        <div transition:fade class="relative flex justify-evenly items-center">
            <Chip
                imgSrc="/core-actions/speak.webp"
                imgHeader="Speak"
                imgAlt="Button to play with text to speech what is selected"  
                speakButton = "true"
                chipAction={()=> {
                    var utterance = new SpeechSynthesisUtterance(sentence);
                    utterance.rate = 0.5;
                    utterance.pitch = 0.6;
                    speechSynthesis.speak(utterance);
                    sentence = "I want a ";
                }}         
            />
        </div>
        <div transition:fade class="relative flex flex-row top-10 justify-center">
            <section class="justify-evenly max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-40">
                {#each getArr as src}
                    <Cards
                        imgSrc={src.imageUrl}
                        imgAlt={src.fileName}
                        imgHeader={src.fileName}
                        cardAction="{()=> {composeSentence(src.fileName)}}"
                    />
                {/each}
                {#each chipArr as src}
                    <Chip 
                        imgSrc={src.imageUrl}
                        imgHeader={src.fileName}
                        imgAlt={src.fileName}
                        chipAction="{()=> {composeSentence(" of " + src.fileName)}}"
                    />
                {/each}
            </section>
        </div>
    {/if}
{/if}