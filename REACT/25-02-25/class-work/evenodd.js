import React from 'react';
import ReactDOM from 'react-dom/client';

function EvenNumber({num}) {
	return <h1>{num} is an EvenNumber!</h1>;
}
function OddNumber({num}) {
	return <h1>{num} is an OddNumber!</h1>;
}

function CheckNumber(props) {
  const isNum = props.num;
  if (isNum%2==0) {
    return <EvenNumber num={isnum}/>;
  }
  return <OddNumber num={isNum}/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckNumber num="903" />);
