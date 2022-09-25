import React, { useRef } from 'react';



export const ContactUs = () => {
 
  return (

    <div className="parafoto" method="POST" data-netlify="true" onSubmit="submit">
     <form className="formulario" required>
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