import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const click = () => {
    alert("Great Shot!");
  };

  const rightClick = (event) => {
    event.preventDefault(); 
    alert("Shoot!!!");
  };

  const mouseLeave = () => {
    alert("Take aim!");
  };

  return (
    <button 
      onClick={click} 
      onContextMenu={rightClick} 
      onMouseLeave={mouseLeave}
    >
      Take the shot!
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
