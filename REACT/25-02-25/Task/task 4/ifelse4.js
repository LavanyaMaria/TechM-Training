import React from 'react';
import ReactDOM from 'react-dom/client';

function ContainsVowel({ text }) {
    return <h1>"{text}" contains at least one vowel!</h1>;
}

function NoVowel({ text }) {
    return <h1>"{text}" does not contain any vowels.</h1>;
}

function CheckVowel(props) {
    const text = props.text.toLowerCase(); 
    const vowels = "aeiou";
    let hasVowel = false;

    for (let char of text) {
        if (vowels.includes(char)) {
            hasVowel = true;
            break;
        }
    }

    let result;
    if (hasVowel) {
        result = <ContainsVowel text={props.text} />;
    } else {
        result = <NoVowel text={props.text} />;
    }

    return <>{result}</>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckVowel text="Panda" />); 
