import Form from '../components/Form'
import Socials from '../components/Socials'

export default function Contact() {

    return (
        <>
            <h2 className="contact-h2">Let's Connect</h2>
            <section className='contact-container'>
                <div className='left-section-main'>
                    <Form />
                </div>
                <div className='right-section-main'>
                    <Socials />
                </div>
            </section>
        </>
    )
}