<script lang="ts">
	import { getDate } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import Button from './ui/button/button.svelte';
	const today = getDate();
	export let quote: string;
	export let author: string;
</script>

<Card.Root class="flex max-h-[400px] w-72 flex-col items-center border-gray-900 ">
	<Card.Header>
		<Card.Title>Today's quote</Card.Title>
		<Card.Description>{today}</Card.Description>
	</Card.Header>
	<Card.Content class="text-pretty font-semibold">
		<p>{quote}</p>
	</Card.Content>
	<Card.Footer class="flex flex-col gap-1">
		<strong>Author</strong>
		<p>{author}</p>
		<form method="POST" action="?/favorite">
			<Button type="submit" variant="link">Add to favorites</Button>
		</form>
	</Card.Footer>
</Card.Root>
