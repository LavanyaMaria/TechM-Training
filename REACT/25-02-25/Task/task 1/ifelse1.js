import React from 'react';
import ReactDOM from 'react-dom/client';

function NotDivisible({ num }) {
    return <h1>{num} is NOT divisible by 13!</h1>;
}

function Divisible({ num }) {
    return <h1>{num} is divisible by 13!</h1>;
}

function CheckNumber(props) {
    const isNum = Number(props.num); 

    let result;
    if (isNum % 13 === 0) {
        result = <Divisible num={isNum} />;
    } else {
        result = <NotDivisible num={isNum} />;
    }

    return <>{result}</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckNumber num={26} />);
