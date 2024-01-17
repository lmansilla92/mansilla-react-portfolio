// Import Input type, placeHolder, and Input component
import { useState } from 'react';

// email validation helper function
function isValidEmail(email) {
    const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return pattern.test(email);
}

// function for Form component
export default function Form() {
    // declaring useState for formData
    const [ formData, setFormData ] = useState({ name: '', email: '', message: ''});
    // useState for setting inputError message
    const [ inputError, setInputError ] = useState(null);

    // handleChange function
    const handleChange = (e) => {
        // set dynamic variables for event.target name and value
        const { name, value } = e.target;
        // useState to update form data
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        // check to make sure input target is email, validate email using isValidEmail function
        if (name === 'email' && !isValidEmail(e.target.value)) {
            // useState to setInputError message
            setInputError('Invalid Email');
        } else {
            setInputError(null);
        }
    }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData', formData);
        console.log(e.target)
        if (isValidEmail(formData.email)){
            console.log('Form submitted!')
        } else {
            setInputError('Invalid Email');
        }
    }

    return (
        <div className='form-container'>
            <h3>Contact Form</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    placeholder='John Doe'
                    value={formData.name}
                    name='name'
                    id='name'
                    autoComplete='given-name'
                    onChange={handleChange}
                    required
                ></input>
                <label htmlFor='email'>Email: </label>
                <input
                    type='email'
                    placeholder='your@mail.com'
                    value={formData.email}
                    name='email'
                    id='email'
                    onChange={handleChange}
                    autoComplete={placeHolder[1]}
                    required
                ></input>
                {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
                <label htmlFor='message'>Message: </label>
                <textarea
                    rows='4'
                    placeholder='Your message'
                    id='message'
                    onChange={handleChange}
                    name='message'
                    value={formData.message}
                >
                </textarea>
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}