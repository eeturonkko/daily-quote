<script>
	import NavMenu from './NavMenu.svelte';
	import MobileMenu from './MobileMenu.svelte';
</script>

<header class="flex justify-between">
	<h1 class="text-2xl font-bold">Daily quote</h1>
	<nav>
		<div class="md:hidden">
			<MobileMenu />
		</div>
		<NavMenu />
	</nav>
</header>
