import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleEmail = () => {

    const templateParams = {
        email
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID2
    const userID = process.env.REACT_APP_EMAILJS_USER_ID
    
    emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });

    toast.success("Thanks! we will reach out to you soon!");
    setEmail("");
  };

  return (
    <div className="footer">
      <div className="footer-main-container">
        <div className="footer-left-container">
          <div className="footer-services">
            <p className="heading">Services</p>
            <p className="service">Branding</p>
            <p className="service">UI/UX Design</p>
            <p className="service">Website & App Development</p>
            <p className="service">Online Payment Gateways</p>
          </div>
          <div className="quick-links">
            <p className="heading">Quick Links</p>
            <p className="service">Contact Us</p>
            <p className="service">Privacy Policy</p>
            <p className="service">Terms & Conditions</p>
          </div>
        </div>
        <div className="footer-right-container">
          <div className="footer-logo">
            <img src="raydium-labs-footer-logo.png" />
          </div>
          <div className="footer-description">
            <p>
              We are an agile group of builders who can build software that
              grows your business sales, management and much more.
            </p>
          </div>
          <div className="contact-container">
            <div className="contact-input">
              <input
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button onClick={handleEmail}>Get in touch</button>
          </div>
        </div>
      </div>
      <div className="footer-ending">@RaydiumLabs 2023 All Rights Reserved</div>
    </div>
  );
}
