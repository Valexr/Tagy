import { name, repository } from 'package.json'
import App from './App.svelte';

const app = new App({
    target: document.body,
    props: { name, repository }
});

export default app;
