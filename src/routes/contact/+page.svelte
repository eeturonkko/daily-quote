<script lang="ts">
	export let data: PageData;
	import type { PageData } from './$types';
	import ContactForm from './ContactForm.svelte';
</script>

<section class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<div class="flex flex-col gap-2">
		<h2 class="text-5xl font-semibold">Contact me</h2>
		<ContactForm data={data.form} />
	</div>
</section>
