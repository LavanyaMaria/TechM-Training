import React from 'react';
import ReactDOM from 'react-dom/client';

function EvenNumber({num}) {
	return <h1>{num} is a EvenNumber!</h1>;
}

function OddNumber({num}) {
	return <h1>{num} is a OddNumber!</h1>;
}
function CheckNumber(props) {
  const isNum = props.num;
 return (
		<>
			{ isNum%2==0 ? <EvenNumber num={isNum}/> : <OddNumber num={isNum}/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckNumber num="90" />);
