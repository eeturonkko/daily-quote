<script lang="ts">
	export let data: PageData;
	import type { PageData } from './$types';
	import ContactForm from './ContactForm.svelte';
</script>

<svelte:head>
	<title>Daily Quote | Contact</title>
</svelte:head>

<main class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<section class="flex flex-col gap-2">
		<h2 class="text-5xl font-semibold">Contact me</h2>
		<ContactForm data={data.form} />
	</section>
</main>
