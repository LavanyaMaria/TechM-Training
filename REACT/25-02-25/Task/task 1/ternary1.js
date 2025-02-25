import React from 'react';
import ReactDOM from 'react-dom/client';

function NotDivisible({num}) {
	return <h1>{num} is not Divisible by 13!</h1>;
}

function Divisible({num}) {
	return <h1>{num} is Divisible by 13!</h1>;
}
function CheckNumber(props) {
  const isNum = props.num;
 return (
		<>
			{ isNum%13==0 ? <Divisible num={isNum}/> : <NotDivisible num={isNum}/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckNumber num="90" />);
