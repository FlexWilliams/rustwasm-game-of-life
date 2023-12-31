## Development

### Notes:

1. Requires <strong>Node v16</strong> (otherwise you may run into ssl errors)
   1. Use nvm to hot-swap

### Build Steps

<br>

In the `game-of-life` directory, run:

```
wasm-pack build
```

<br>

In the `www` directory, run:

```
npm run start
```

### Takeaways/Learning

1. wasm-bindgen - allows JS/wasm to communicate with strings, JS objects, classes, etc, as opposed to purely integers and floats.
   1. Ex. https://rustwasm.github.io/wasm-bindgen/print.html#srclibrs-1
