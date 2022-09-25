import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_APIKEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (

    <div className="parafoto">
     <form ref={form} onSubmit={sendEmail} className="formulario" required>
       <label>Name</label>
       <input type="text" name="name" className='user-name' placeholder='Write your name' minLength='5' maxLength='25' required />
       <label>Email</label>
       <input type="email" name="user_email" className='email' placeholder='Write an email' required/>
       <label>Message</label>
       <textarea name="message" placeholder='How can I help you?' />
       <input type="submit" value="Send"  className='submit' required/>
     </form>
   </div>
   );
 };