<script>
import "../app.pcss";
import Header from "$lib/components/Header.svelte";
</script>

<main class="container flex flex-col">
  <Header />
  <slot></slot>
</main>