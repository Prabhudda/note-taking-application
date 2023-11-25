import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteProvider from './Context';
import { BrowserRouter } from 'react-router-dom';
import { WebSocketComponent } from './WebSocketComponent';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WebSocketComponent />
      <NoteProvider>
        <App />
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
