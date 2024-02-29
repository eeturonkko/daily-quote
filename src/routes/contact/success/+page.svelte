<script>
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Daily Quote | Thank you for contacting us</title>
</svelte:head>

<main class="mt-16 flex flex-col items-center gap-8 p-8 text-center">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-semibold md:text-5xl">Thank you for sending us a message</h2>
		<p class="text-xs font-medium md:text-lg">I will get back to you as soon as possible.</p>
	</div>
	<a class={buttonVariants({ variant: 'default' })} href="/contact">Go back</a>
</main>
