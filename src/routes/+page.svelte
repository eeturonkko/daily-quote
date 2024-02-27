<script lang="ts">
	import QuoteCard from '$lib/components/QuoteCard.svelte';
	export let data;
	const quote = data.quote;
	const author = data.author;
</script>

<section class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-semibold md:text-5xl">Discover Daily Inspiration</h2>
		<p class="text-xs font-medium md:text-lg">
			Receive a new quote every day to uplift and motivate.
		</p>
	</div>
	<QuoteCard {quote} {author} />
</section>
