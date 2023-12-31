//@ts-ignore
import init, { greet } from 'wasm';

init().then(() => {
	console.log('init wasm-pack');
	greet('from vite!');
});
