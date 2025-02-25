import React from "react";
import ReactDOM from 'react-dom/client';

function Library() {
    const click = () => {
        alert("Bookopia ><!!!");
    };

    const right = (event) => {
        event.preventDefault();
        alert("Want to buy????");
    };

    const hover = () => {  // Fixed function name
        alert("Welcome to Bookopia");
    };

    return (
        <button
            onClick={click}
            onContextMenu={right} 
            onMouseOver={hover}   
        >
            Books! 0.0
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Library />);
