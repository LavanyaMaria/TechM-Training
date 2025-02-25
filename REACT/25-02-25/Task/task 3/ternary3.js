import React from 'react';
import ReactDOM from 'react-dom/client';

function MultipleOfThree({ arr }) {
    return <h1>The number of elements in [{arr.join(", ")}] is a multiple of 3.</h1>;
}

function NotMultipleOfThree({ arr }) {
    return <h1>The number of elements in [{arr.join(", ")}] is NOT a multiple of 3.</h1>;
}

function CheckArrayLength(props) {
    const arr = props.arr;
    const length = arr.length; // Get the array length

    return (
        <>
            {length % 3 === 0 ? <MultipleOfThree arr={arr} /> : <NotMultipleOfThree arr={arr} />}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <CheckArrayLength arr={[9, 4, 24]} />
        <CheckArrayLength arr={[9, 24]} />
    </>
);
