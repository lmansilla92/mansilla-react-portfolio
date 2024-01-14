import { useState } from 'react';
const type = ['text', 'email'];
const placeHolder = ['Name', 'Email', 'Message'];

// Create Input component to re use inside the Contact form
function Input({ type, placeHolder }) {
    const [input, setInput] = useState(''); // declares input and uses state
    const handleChange = (e) => {
        setInput(e.target.value); // allows user input to be displayed inside the form input box
        console.log(e.target.value)
    }
    // Ternary operator to conditionally render an input or textarea depending on placeHolder value
    return placeHolder !== 'Message' ? (
        <input
            type={type}
            placeholder={placeHolder}
            value={input}
            name="text"
            id={placeHolder}
            onChange={handleChange}
            autoComplete={placeHolder}
            required
        ></input>
    ) : (
        <textarea 
            rows='4'
            placeholder={placeHolder}
            id={placeHolder}
        >
        </textarea>
    )
}

export {
    type,
    placeHolder,
    Input
}