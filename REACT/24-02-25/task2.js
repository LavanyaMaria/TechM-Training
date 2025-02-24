import React from 'react';
import ReactDOM from 'react-dom/client';

function Flower(props) {
  return <h2>{props.name} Flower</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Flower  name="Rose"/>);
