import { default as React } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css_files/index.css';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

  </React.StrictMode>
);

reportWebVitals();
