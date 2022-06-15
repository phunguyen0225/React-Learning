import {createRoot} from 'react-dom/client';
import App from './App';

const contents = createRoot(document.getElementById('contents'));

contents.render(
   <App/>, {size: 8}, null,
);