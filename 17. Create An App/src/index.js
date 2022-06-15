import {createElement} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const contents = createRoot(document.getElementById('contents'));

contents.render(
    createElement(App, {size: 8}, null),
);