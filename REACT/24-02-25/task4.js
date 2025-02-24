import React from 'react';
import ReactDOM from 'react-dom/client';

function Animal(props) {
  return <h2>{props.species} Animal</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Animal  species="Panda"/>);
