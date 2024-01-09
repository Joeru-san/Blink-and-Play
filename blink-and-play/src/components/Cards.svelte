<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { applyThemeClass, selectedThemeValue, IsBurgerOpen } from '../themeStore.js';
  export let imgSrc = "";
  export let imgAlt = "";
  export let imgHeader = "";
  export let cardAction = "";
  let fadeIn = false;

  onMount(() => {
    fadeIn = true;
  });
  $IsBurgerOpen=false;
</script>
{#if $IsBurgerOpen === false}
  {#if fadeIn}
    <button on:click={cardAction}>
      <div transition:fade={{ duration: 1000 }} class="{$selectedThemeValue}-theme-card max-w-sm overflow-hidden shadow-lg rounded-lg hover:bg-[#595959] duration-300 sm:max-w-xs md:max-w-md lg:max-w-md">
        <img class="w-full point" src={imgSrc} alt={imgAlt} />
        <div class="relative flex items-center justify-center px-6 py-4">
          <div class="font-bold text-2xl">{imgHeader}</div>
        </div>
      </div>
    </button>
  {/if}
{/if}