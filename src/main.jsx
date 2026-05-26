import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';

const now = new Date();
const hour = now.getHours();
const minutes = now.getMinutes();
const isDark = (hour === 23 && minutes >= 30) || (hour >= 0 && hour < 8);

if (isDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.removeAttribute('data-theme');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
