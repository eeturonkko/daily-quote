<script lang="ts">
	import QuoteCard from '$lib/components/QuoteCard.svelte';
	export let data;
	const quote = data.quote;
	const author = data.author;
</script>

<svelte:head>
	<title>Daily Quote | Home</title>
</svelte:head>

<main class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<section class="flex flex-col gap-2">
		<h2 class="text-4xl font-semibold md:text-5xl">Discover Daily Inspiration</h2>
		<p class="text-md font-medium md:text-lg">
			Receive a new quote every day to uplift and motivate.
		</p>
	</section>
	<QuoteCard {quote} {author} />
</main>
