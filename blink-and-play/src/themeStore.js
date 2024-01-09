import { writable } from 'svelte/store';

export const selectedThemeValue = writable('light');
export const IsBurgerOpen = writable(false);
export const toggleTheme = () => {
  selectedThemeValue.update((currentValue) => {
    const newTheme = currentValue === 'light' ? 'dark' : 'light';
    applyThemeClass(newTheme);
    return newTheme;
  });
};

export const applyThemeClass = (themeValue) => {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${themeValue}-theme`);
};
