import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import App from './App.jsx';

import { Provider } from 'react-redux';
import CRUD_Store from './ReduxRTK/Store.jsx';

import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={CRUD_Store}>
      <App />
    </Provider>
  </BrowserRouter>
);