<script>
    export let imgSrc="";
    export let imgAlt="";
    export let imgHeader="";
    export let cardAction="";

</script>

<button on:click={cardAction}>
    <div class="max-w-sm overflow-hidden shadow-lg rounded-lg hover:bg-[#595959] duration-300">
        <img class="w-full point" src={imgSrc} alt="{imgAlt}"/>
            <div class="relative flex items-center justify-center px-6 py-4">
                <div class="font-bold text-2xl">{imgHeader}</div>
            </div>
    </div>
</button>