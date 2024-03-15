//src\index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './utils/upload.js';
import './index.css';

// Подключение вспомогательных JavaScript файлов
// import './utils/helpers';
// import API from './utils/api';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
