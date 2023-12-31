import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), wasmPack(['./game-of-life-wasm'])],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
