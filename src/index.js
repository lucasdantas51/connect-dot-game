import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function removeTouchActionsFromBody() {
  const bodyElement = document.body;
  
  // Remover o evento 'touchstart'
  bodyElement.removeEventListener('touchstart', preventTouchAction, { passive: false });

  // Remover o evento 'touchmove'
  bodyElement.removeEventListener('touchmove', preventTouchAction, { passive: false });
}

function preventTouchAction(e) {
  e.preventDefault();
}

// Para remover as ações de toque do body, chame a função:
removeTouchActionsFromBody();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
