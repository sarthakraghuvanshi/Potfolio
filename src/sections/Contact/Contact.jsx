import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Style from './ContactStyle.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j87f8fm', 'template_3ks2axq', form.current, 'qODZAEi5ktr3SHrD2')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent successfully!');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className={Style.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="from_name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" name="from_email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;