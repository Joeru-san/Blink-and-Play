<script>
  import { onMount } from 'svelte';
  import { selectedThemeValue, toggleTheme} from '../themeStore.js';

  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' }
  ];

  onMount(() => {
  });
</script>

<div class="layout">
  <button on:click={toggleTheme} class="flex items-center">
    <img class="w-8 h-8 mr-2 object-contain" src="/src/assets/{$selectedThemeValue}-theme.webp" alt="Theme selector" />
    <div class="font-bold text-2xl">{$selectedThemeValue}</div>
  </button>
</div>
