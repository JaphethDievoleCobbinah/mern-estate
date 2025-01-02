import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './redux/store'; // Make sure to import as 'store'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);