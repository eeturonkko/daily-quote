<script>
	import MobileMenu from './MobileMenu.svelte';
</script>

<header class="flex justify-between">
	<h1 class="text-2xl font-bold">Daily quote</h1>
	<nav>
		<div class="md:hidden">
			<MobileMenu />
		</div>
		<ul class="hidden gap-8 font-semibold md:flex">
			<li class="hover:underline">
				<a href="/">Home</a>
			</li>
			<li class="hover:underline">
				<a href="/about">About</a>
			</li>
			<li class="hover:underline">
				<a href="favorites">Favorites</a>
			</li>
		</ul>
	</nav>
</header>
