import React from 'react';
import ReactDOM from 'react-dom/client';

function Animal() {
  return <h2>Panda!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Animal />);
