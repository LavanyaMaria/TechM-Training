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

    let result;
    if (length % 3 === 0) {
        result = <MultipleOfThree arr={arr} />;
    } else {
        result = <NotMultipleOfThree arr={arr} />;
    }

    return <>{result}</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <CheckArrayLength arr={[9, 4, 24]} />
        <CheckArrayLength arr={[9, 24]} />
    </>
);
