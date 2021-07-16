// https://www.emailjs.com/docs/examples/reactjs/
import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" /><br /><br />
            <label>Email</label>
            <input type="email" name="user_email" /><br /><br />
            <label>Message</label>
            <textarea name="message" /><br /><br />
            <input type="submit" value="Send" />
        </form>
    );
}