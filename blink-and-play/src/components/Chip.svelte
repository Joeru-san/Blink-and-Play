<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    export let imgSrc;
    export let imgAlt;
    export let imgHeader;
    export let chipAction;

    let fadeIn = false;

    onMount(() => {
        fadeIn = true;
    });
</script>


{#if fadeIn}
    <button on:click={chipAction}>
        <div transition:fade class="[word-wrap: break-word] my-[5px] ml-4 mr-4 flex h-[42px] cursor-pointer items-center justify-between rounded-[21px] bg[#cacfd1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none dark:bg-neutral-600 dark:text-neutral-200">
            <img
                class="my-0 -ml-[12px] mr-[8px] h-[inherit] w-[inherit] rounded-[100%]"
                src={imgSrc}
                alt={imgAlt} 
            />
            {imgHeader}
            <span class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100" />
        </div>
    </button>
{/if}