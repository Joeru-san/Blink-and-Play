<script>
    import Main from "../components/Main.svelte";
    import Choice from "../components/Choice.svelte";

    let showChoice = false;

    function handleShowChoice() {
        showChoice = true;
    }
</script>

{#if !showChoice}
    <Main on:showChoice={handleShowChoice}/>

{:else if showChoice}
    <Choice />
    <script> console.log("suca") </script>
{/if}
