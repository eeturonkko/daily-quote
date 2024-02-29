<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Daily Quote | Favorites</title>
</svelte:head>

<main class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<section class="flex flex-col gap-2">
		<h2 class="text-4xl font-semibold md:text-5xl">Favorite quotes</h2>
		<p class="text-lg font-medium">The best of the best. Chosen by you.</p>
		<ul class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each data.favorites as { quote, author }}
				<li>
					<blockquote>{quote}</blockquote>
					<cite>— {author}</cite>
				</li>
			{/each}
		</ul>
	</section>
</main>
