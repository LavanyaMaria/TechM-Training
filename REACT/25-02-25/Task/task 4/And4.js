import React from 'react';
import ReactDOM from 'react-dom/client';

function ContainsVowel({ text }) {
    return <h1>"{text}" contains vowel!</h1>;
}

function NoVowel({ text }) {
    return <h1>"{text}" does not contain any vowels.</h1>;
}

function CheckVowel(props) {
    const text = props.text.toLowerCase();
    const vowels = "aeiou";
    const hasVowel = text.split("").some(char => vowels.includes(char));

    return (
        <>
            {hasVowel && <ContainsVowel text={props.text} />}
            {!hasVowel && <NoVowel text={props.text} />}
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckVowel text="Panda" />); // Test with "Hello"
