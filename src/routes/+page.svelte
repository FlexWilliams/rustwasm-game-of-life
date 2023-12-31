<script lang="ts">
	import init, { Universe } from 'game-of-life-wasm';
	import { onMount } from 'svelte';

	onMount(async () => {
		init().then(() => {
			const pre = document.getElementById('game-of-life-canvas');

			if (!pre) {
				console.log('Pre element not found!');
				return;
			}

			const universe = Universe.new();

			const renderLoop = () => {
				pre.textContent = universe.render();
				universe.tick();

				requestAnimationFrame(renderLoop);
			};

			// Tell the browser you wish to perform an animation (pretty plz)
			// See: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
			requestAnimationFrame(renderLoop);
		});
	});
</script>

<noscript
	>This page contains webassembly and javascript content, please enable javascript in your browser.</noscript
>
<h1>Game of Life</h1>
<pre id="game-of-life-canvas"></pre>
