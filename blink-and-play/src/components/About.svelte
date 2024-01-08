<script>
export let isOpen = false;
import { applyThemeClass, selectedThemeValue, toggleTheme } from '../themeStore.js';

const handle = () => {
    isOpen=!isOpen;
};
</script>

{#if isOpen}
<div class="overlay">
    <div class="overlay-content {$selectedThemeValue}-theme-card z-9999">
        <p>Work in progress</p>
    </div>
    <button class="close-button relative flex w-23 fa fa-times fa-2x" on:click={handle}></button>
</div>
{:else}
<button on:click={handle} class="flex items-center">
    <svg class="w-8 h-8 mr-2 object-contain" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
        <path fill="#2196F3" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"></path><path fill="#FFF" d="M22 20H26V31H22zM24 13A2 2 0 1 0 24 17 2 2 0 1 0 24 13z"></path>
    </svg>
    <div class="font-bold text-2xl">About</div>
</button>
{/if}

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay-content {
    padding: 20px;
    width: 40%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
