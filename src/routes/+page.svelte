<script lang="ts">
	import init, { Universe } from 'game-of-life-wasm';
	import { onMount } from 'svelte';

	let wasm: any; // TODO: add type of `InitOutput`

	const CELL_SIZE = 5; // in px
	const GRID_COLOR = '#CCCCCC';
	const DEAD_COLOR = '#FFFFFF';
	const ALIVE_COLOR = '#000000';

	function drawGrid(context: CanvasRenderingContext2D, width: number, height: number): void {
		context.beginPath();
		context.strokeStyle = GRID_COLOR;

		// Vertical lines.
		for (let i = 0; i <= width; i++) {
			context.moveTo(i * (CELL_SIZE + 1) + 1, 0);
			context.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
		}

		// Horizontal lines.
		for (let j = 0; j <= height; j++) {
			context.moveTo(0, j * (CELL_SIZE + 1) + 1);
			context.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
		}

		context.stroke();
	}

	function getIndex(row: number, column: number, width: number): number {
		return row * width + column;
	}

	function isBitSet(cellIndex: number, cells: Uint8Array): boolean {
		const byte = Math.floor(cellIndex / 8);
		const mask = 1 << cellIndex % 8;
		return (cells[byte] & mask) === mask;
	}

	function drawCells(
		context: CanvasRenderingContext2D,
		width: number,
		height: number,
		cellsPointer: number
	) {
		const cells = new Uint8Array(wasm.memory.buffer, cellsPointer, (width * height) / 8);

		context.beginPath();

		for (let row = 0; row < height; row++) {
			for (let col = 0; col < width; col++) {
				const idx = getIndex(row, col, width);

				// This is updated!
				context.fillStyle = isBitSet(idx, cells) ? ALIVE_COLOR : DEAD_COLOR;

				context.fillRect(
					col * (CELL_SIZE + 1) + 1,
					row * (CELL_SIZE + 1) + 1,
					CELL_SIZE,
					CELL_SIZE
				);
			}
		}

		context.stroke();
	}

	onMount(async () => {
		wasm = await init();

		const universe = Universe.new(64, 64);
		const width = universe.width();
		const height = universe.height();
		const cellsPointer = universe.cells();

		// Give the canvas room for all of our cells and a 1px border
		// around each of them.
		const canvas = document.getElementById('game-of-life-canvas') as HTMLCanvasElement;
		if (!canvas) {
			console.error('Canvas element not found!');
			return;
		}

		canvas.height = (CELL_SIZE + 1) * height + 1;
		canvas.width = (CELL_SIZE + 1) * width + 1;

		const context = canvas.getContext('2d');
		if (!context) {
			console.error('Error getting 2D canvas ontext!');
			return;
		}

		const renderLoop = () => {
			universe.tick();

			drawGrid(context, width, height);
			drawCells(context, width, height, cellsPointer);
			requestAnimationFrame(renderLoop);
		};

		// Tell the browser you wish to perform an animation (pretty plz)
		// See: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		requestAnimationFrame(renderLoop);
	});
</script>

<noscript
	>This page contains webassembly and javascript content, please enable javascript in your browser.</noscript
>
<h1>Game of Life</h1>
<canvas id="game-of-life-canvas"></canvas>
