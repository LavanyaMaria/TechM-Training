import React from 'react';
import ReactDOM from 'react-dom/client';

function Even({ text }) {
    return <h1>"{text}" has an EVEN length!</h1>;
}

function Odd({ text }) {
    return <h1>"{text}" has an ODD length!</h1>;
}
function CheckStringLength(props) {
    const text = props.text;
    const length = text.length;

    return (
        <>
            {length % 2 === 0 && <Even text={text} />}
            {length % 2 !== 0 && <Odd text={text} />}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckStringLength text="Panda Cherry" />); 
