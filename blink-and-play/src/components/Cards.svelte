<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
  
    export let imgSrc = "";
    export let imgAlt = "";
    export let imgHeader = "";
    export let cardAction = "";
  
    let fadeIn = false;
  
    onMount(() => {
      fadeIn = true;
    });
  </script>
  
  {#if fadeIn}
    <button on:click={cardAction}>
      <div transition:fade={{ duration: 1000 }} class="max-w-sm overflow-hidden shadow-lg rounded-lg hover:bg-[#595959] duration-300">
        <img class="w-full point" src={imgSrc} alt="{imgAlt}" />
        <div class="relative flex items-center justify-center px-6 py-4">
          <div class="font-bold text-2xl">{imgHeader}</div>
        </div>
      </div>
    </button>
  {/if}
  