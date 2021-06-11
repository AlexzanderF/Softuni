import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode >
    <div className="App">
      <Navigation />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
