## Development

### Notes:

1. Requires <strong>Node v16</strong> (otherwise you may run into ssl errors)
    1. Use nvm to hot-swap

### Build Steps

<br>

In the  `game-of-life` directory, run:

```
wasm-pack build
```

<br>

In the `www` directory, run:

```
npm install && npm run start
```