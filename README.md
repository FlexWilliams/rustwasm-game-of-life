# rustwasm - Conway's Game of Life (w/SvelteKit)

Implementing the [rustwasm tutorial](https://rustwasm.github.io/docs/book/game-of-life/introduction.html) of Conway's Game of Life using [SvelteKit](https://kit.svelte.dev/) as the UI.

<br>

## Development

- Using [pnpm](https://pnpm.io/) as package manager
- Node v20

<br>

### Running

Install web dependencies:

```
pnpm install
```

Compile the wasm package via:

```
pnpm wasm
```

Run the development server:

```
pnpm dev
```

<br>

Visit: [http://localhost:5173](http://localhost:5173)

<br>

### Takeaways/Learnings/Links

1. wasm-bindgen - allows JS/wasm to communicate with strings, JS objects, classes, etc, as opposed to purely integers and floats.
   1. Ex. https://rustwasm.github.io/wasm-bindgen/print.html#srclibrs-1
2. wasm-pack vite-plugin: https://github.com/nshen/vite-plugin-wasm-pack
