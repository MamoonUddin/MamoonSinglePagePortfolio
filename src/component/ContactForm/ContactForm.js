import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";
import {FaPaperPlane} from "react-icons/fa";

export default function ContactForm() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID ,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,process.env.REACT_APP_EMAILJS_PUBLIC_KEY      )
      .then(() => {
          form.current.reset();
          
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    <form ref={form} onSubmit={sendEmail} id="contact-form" className="form-horizontal" >
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
        <FaPaperPlane/><span className="send-text">SEND</span>
        </div>
      
    </button>
  </form>
    
 ); 
}


