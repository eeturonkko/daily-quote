<script>
import "../app.pcss";
import Header from "$lib/components/Header.svelte";
</script>

<main class="flex flex-col  bg-black text-white min-h-screen">
  <section class="container mt-6">
    <Header />
    <slot></slot>
  </section>
</main>