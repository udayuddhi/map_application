import React from 'react';
import './home.css'

function ContactUsPage() {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUsPage;