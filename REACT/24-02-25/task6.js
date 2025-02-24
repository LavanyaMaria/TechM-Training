import React from 'react';
import ReactDOM from 'react-dom/client';

function Java() {
  return <h3>Java: Object-oriented programming language.</h3>;
}

function JavaScript() {
  return <h3>JavaScript: Used for web development and scripting.</h3>;
}

function ReactJS() {
  return <h3>React: JavaScript library for building UI components.</h3>;
}

function Angular() {
  return <h3>Angular: TypeScript-based front-end framework.</h3>;
}

function Training() {
  return (
    <div>
      <h1>Topics for Training</h1>
      <Java />
      <JavaScript />
      <ReactJS />
      <Angular />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Training />);
