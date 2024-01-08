<script>
  export let isOpen = false;
  import Thememanager from './Thememanager.svelte';
  import About from './About.svelte';
  import { applyThemeClass, selectedThemeValue, toggleTheme } from '../themeStore.js';
  import { fade } from 'svelte/transition';
</script>

{#if isOpen}
  <div transition:fade={{ duration: 300 }} class="max-h-20 {$selectedThemeValue}-theme-burger flex">
    <div class="flex ml-3 mr-6 max-h-fit">
      <About />
    </div>
    <div class="flex mr-12 max-h-fit">
      <Thememanager />
    </div>
    <button class="relative flex w-23 fa fa-times fa-2x" on:click={() => isOpen = !isOpen}></button>
  </div>
{:else}
  <button transition:fade={{ duration: 300 }} class="relative flex w-23 fa fa-bars fa-2x" on:click={() => isOpen = !isOpen}></button>
{/if}
