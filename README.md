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
3. Getting { memory } module to load since now using the `no bundler` strategy. See link below (kudos!):
   1. https://lionturkey.github.io/posts/rustwasm/rustwasm.html
   2. "In order to access memory used by Wasm without npm, we need to save the output of the init() function"
