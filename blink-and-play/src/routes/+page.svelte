<script>
    import Main from "../components/Main.svelte";
    import Choice from "../components/Choice.svelte";
    
    let isChoice = false;
    let selectedCard = null;

    function handleChoice(cardType) {
        selectedCard = { type: cardType };
        isChoice = true;
    }
</script>

{#if !isChoice}
    <Main onChoice={handleChoice} />
{/if}

{#if isChoice}
    <Choice onChoice={isChoice} cardInfo={selectedCard} />
{/if}
