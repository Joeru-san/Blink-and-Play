<script>
    import BurgerMenu from './BurMenuContent/BurgerMenu.svelte';
</script>
<header class="sticky px-6 py-6 duration-200 flex items-center justify-evenly">
    <div class="relative flex">
        <button class="relative flex w-24 fa fa-arrow-circle-left fa-2x" aria-hidden="true" onclick="window.location.reload();"></button>
    </div>

    <div class="relative flex">
        <img class="relatve flex w-24" src="/BlinkAndPlayLogo.webp" alt="Logo of Blink and Play"/>
    </div>

    <div class="relative flex w-24 justify-end">
        <BurgerMenu />
    </div>
</header>