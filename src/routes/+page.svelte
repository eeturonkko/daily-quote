<script lang="ts">
	import QuoteCard from '$lib/components/QuoteCard.svelte';
</script>

<section class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<div class="flex flex-col gap-2">
		<h2 class="text-5xl font-semibold">Discover Daily Inspiration</h2>
		<p class="text-lg font-medium">Receive a new quote every day to uplift and motivate.</p>
	</div>
	<div></div>
	<QuoteCard />
</section>
