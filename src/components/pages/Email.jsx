import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('mKw9TiZ8FQzzdIHwSsPCZ', 'mKw9TiZ8FQzzdIHwSsPCZ', form.current, 'enQastcymiPl2AWrQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
  return (
    <div className='page-container'>

        <form ref={form} onSubmit={sendEmail}>
            <table>
                <tbody>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" name="user_name" /></td>
                </tr>

                <tr>
                    <td><label>Email</label></td>
                    <td><input type="email" name="user_email" /></td>
                </tr>

                <tr>
                    <td><label>Message</label></td>
                    <td><textarea name="message" /></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input type="submit" value="Send" /></td>
                </tr>
                </tbody>

            </table>
        </form>
    </div>
  )
}

export default Email;


/*


export const ContactUs = () => {
  
  

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
*/