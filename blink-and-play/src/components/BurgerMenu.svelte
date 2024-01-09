<script>
  import ThemeManager from './ThemeManager.svelte';
  import About from './About.svelte';
  import { applyThemeClass, selectedThemeValue, IsBurgerOpen } from '../themeStore.js';
  import { fade } from 'svelte/transition';
</script>

{#if $IsBurgerOpen}
  <div class="overlay" on:click={() => $IsBurgerOpen = !$IsBurgerOpen}></div>
  <div transition:fade={{ duration: 300 }} class="side-panel {$selectedThemeValue}-theme-burger">
    <button class="close-button relative flex w-26 fa fa-2x mr-4 mt-3" on:click={() => $IsBurgerOpen = !$IsBurgerOpen}>&times;</button>
    <div class="side-panel-item {$selectedThemeValue}-theme-burger">
      <About />
    </div>
    <div class="side-panel-item {$selectedThemeValue}-theme-burger">
      <ThemeManager />
    </div>
  </div>
{:else}
  <button transition:fade={{ duration: 300 }} class="relative flex w-23 fa fa-bars fa-2x" on:click={() => $IsBurgerOpen = !$IsBurgerOpen}></button>
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .side-panel {
    position: fixed;
    top: 0;
    left: auto;
    right: 0;
    height: 100%;
    width: 17%;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 1000;
  }

  .close-button {
    position: fixed;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .side-panel-item {
    margin-bottom: 20px;
    width: 80%;
    left: auto;
  }
</style>
