import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function FlowerCheck() {
    const flowers = ["Rose", "Jasmine", "Lotus", "Lavender", "Tulip"];
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

   const checkFlower = () => {
        const isFlower = flowers.includes(input);
        isFlower && setMessage(`${input} is a flower!`);
        !isFlower && setMessage(`${input} is NOT a flower.`);
    };

    return (
        <div>
            <h2>Flower Checker</h2>
            <input 
                type="text" 
                placeholder="Enter a name..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={checkFlower}>Check</button>
            <h3>{message}</h3>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FlowerCheck />);
