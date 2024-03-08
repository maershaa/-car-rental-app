import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/car-rental-app">
          <App />
        </BrowserRouter>
      </PersistGate>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
