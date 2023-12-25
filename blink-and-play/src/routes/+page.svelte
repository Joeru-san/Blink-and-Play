<script>
    import Main from "../components/Main.svelte";
    import Choice from "../components/Choice.svelte";
    
    let isChoice = false;
</script>

{#if !isChoice}
    <Main onChoice={() => {
        isChoice=true;
    }}/>
{/if}
<Choice onChoice={isChoice} />