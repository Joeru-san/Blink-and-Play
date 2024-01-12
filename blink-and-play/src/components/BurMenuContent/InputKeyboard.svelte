<!-- Keyboard.svelte -->
<script>
    let inputText = "";
    let IsKeyboardVisible = false;
    import { selectedThemeValue } from '../../themeStore.js';
    const keys = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M",
    ];

    const specialKeys = [
        "Space", "Backspace", "Empty"
    ];

    function handleKeyClick(key) {
        if (key === "Space") {
            inputText += " ";
        } else if (key === "Backspace") {
            inputText = inputText.slice(0, -1);
        } else if (key === "Empty") {
            inputText = "";  // Svuota l'input box
        } else {
            inputText += key;
        }
    }

    function toggleKeyboard() {
        IsKeyboardVisible = !IsKeyboardVisible;
    }
</script>

{#if IsKeyboardVisible}
    <div class="keyboard-container">
        <div class="{$selectedThemeValue}-theme-card p-4">
            <div class="close-container">
                <button on:click={toggleKeyboard} class="close-button relative flex w-26 fa fa-2x mr-4 mt-3"></button>
            </div>
            <div class="input-container mb-4">
                <input bind:value={inputText} style="color: black;" />
            </div>
            <div class="keyboard">
                {#each keys as key}
                    <button on:click={() => handleKeyClick(key)} style="color: black;" class="button">{key}</button>
                {/each}
            </div>
            <div class="special-keys mt-4">
                {#each specialKeys as key}
                    <button on:click={() => handleKeyClick(key)} style="color: black;" class="button">{key}</button>
                {/each}
            </div>
        </div>
    </div>
<div class="">
    <button on:click={toggleKeyboard} class="flex items-center">
        <img class="w-8 h-8 mr-2 object-contain" src="/src/assets/Speak.svg" alt="Keyboard" />
        <div class="font-bold text-2xl">Speak</div>
    </button>
</div>
{:else}
<div class="">
    <button on:click={toggleKeyboard} class="flex items-center">
        <img class="w-8 h-8 mr-2 object-contain" src="/src/assets/Speak.svg" alt="Keyboard" />
        <div class="font-bold text-2xl">Speak</div>
    </button>
</div>
{/if}
<style>
    .keyboard-container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        max-width: 400px;
    }

    .close-container {
        align-self: flex-start;
    }

    .input-container {
        width: 100%;
    }

    .keyboard {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        max-width: 400px;
        justify-content: center; /* Aggiunto per centrare i pulsanti */
    }

    .special-keys {
        display: flex;
        justify-content: center;
        gap: 5px;
        max-width: 400px;
    }

    .close-button {
        cursor: pointer;
    }

    .button {
        padding: 20px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        background-color: #ddd;
        border-radius: 6px;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
    }
</style>