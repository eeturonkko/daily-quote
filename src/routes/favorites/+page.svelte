<script lang="ts">
	export let data;
</script>

<section class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<div class="flex flex-col gap-2">
		<h2 class="text-5xl font-semibold">Favorite quotes</h2>
		<p class="text-lg font-medium">The best of the best. Chosen by you.</p>
		<ul class="mt-6 grid grid-cols-2 gap-4">
			{#each data.favorites as { quote, author }}
				<li>
					<blockquote>{quote}</blockquote>
					<cite>— {author}</cite>
				</li>
			{/each}
		</ul>
	</div>
</section>
