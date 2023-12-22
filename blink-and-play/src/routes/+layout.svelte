<script>
  import Header from "../components/Header.svelte"
  import Footer from "../components/Footer.svelte"
  import "../app.css";
</script>

<div class="container relative flex flex-col max-w-full mx-auto w-full text-sm sm:text-base min-h-screen">
<Header />
<slot />
<Footer />
</div>