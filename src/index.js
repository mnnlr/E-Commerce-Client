import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Contexts/UserContext';

import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  // </React.StrictMode>
);

reportWebVitals();
