import React, { useEffect } from 'react';
import { useState } from 'react';
import './Contact.scss';
import Spinner from '../Spinner/Spinner';
import mail from '../../images/email.png';
import Footer from '../Footer/Footer';


const Contact = () => {

    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1400);
    },[])

  return (
    spinner ? <Spinner/> :

    <div className='contact'>

        <h2 className='contact-subtitle javascript '>
            Contact
        </h2>

        <p className='contact-text'> Need more information? Please feel free to contact me...
        </p>

        <form className='contact-form'>

            <div className="contact-form-group-name">

                    <label  className="contact-label javascript">
                        Name
                    </label>

                    <input
                        type="text"
                        className="contact-input"
                        required="required"
                    />
            </div>

            <div className="contact-form-group">

                    <label  className="contact-label javascript">
                        E-mail
                    </label>

                    <input
                        type="email"
                        className="contact-input"
                        required="required"
                    />

            </div>

            <div className="contact-form-group">
                    <label  className="contact-label javascript">
                        Subject
                    </label>
                    <textarea
                        type="text"
                        className="contact-inputarea"
                        required="required"
                    />
            </div>

            <button className='contact-name'> 
                <span className='green'>S</span>end <span className='green'>M</span>essage 
            </button>

        </form>

        <Footer/>

        {/* <img className='contact-mail' src={mail} alt='logo mail'/> */}
    </div>

  )
}


export default Contact;