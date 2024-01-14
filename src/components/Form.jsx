// Import Input type, placeHolder, and Input component
import { type, placeHolder, Input } from './Input';

export default function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted!');
        console.log(e.target);
    }

    return (
        <div className='form-container'>
            <h3>Contact Form</h3>

            
            <form onSubmit={handleSubmit}>
                <Input 
                    type={type[0]} 
                    placeHolder={placeHolder[0]}
                />
                <Input 
                    type={type[1]} 
                    placeHolder={placeHolder[1]}
                />
                <Input 
                    type={type[0]} 
                    placeHolder={placeHolder[2]}
                />
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}