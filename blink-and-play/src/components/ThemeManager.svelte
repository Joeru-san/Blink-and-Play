<!-- ThemeManager.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fade } from "svelte/transition";
    import { writable } from 'svelte/store';
  
    const themes = [
      { name: 'Light', value: 'light' },
      { name: 'Dark', value: 'dark' }
    ];
  
    export const selectedTheme = writable(themes[0]);
  
    let selectedThemeValue;
  
    const toggleTheme = () => {
      selectedThemeValue = selectedThemeValue === 'light' ? 'dark' : 'light';
      selectedTheme.set(themes.find(theme => theme.value === selectedThemeValue));
      applyThemeClass(selectedThemeValue);
      console.log(`Theme switched to: ${selectedThemeValue}`);
    };
  
    onMount(() => {
      if (!import.meta.env.SSR) {
        toggleTheme();
      }
    });
  
    const applyThemeClass = (theme) => {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(`${theme}-theme`);
    };
  </script>
  
  <div class="layout">
    <button on:click={toggleTheme}>Theme: {selectedThemeValue}
        <div transition:fade={{ duration: 1000 }} class="max-w-sm overflow-hidden shadow-lg rounded-lg hover:bg-[#595959] duration-300">
            <img class="w-full point" src="/src/assets/{selectedThemeValue}-theme.webp" alt="Theme selector" />
            <div class="relative flex items-center justify-center px-6 py-4">
              <div class="font-bold text-2xl">Theme: {selectedThemeValue}</div>
            </div>
          </div>
    </button>
  </div>
