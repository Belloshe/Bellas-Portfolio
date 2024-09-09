'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css';
import emailjs from 'emailjs-com';

export default function Header() {
  const [showCV, setShowCV] = useState(false);
  const [showContact, setShowContact] = useState(false); 
  const form = useRef();

  const handleButtonClick = () => {
    setShowCV(!showCV);
  };

  const handleCloseClick = () => {
    setShowCV(false);
    setShowContact(false); 
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_qi47plr', 'template_o54dyym', form.current, '4SuBNA1KBx2x0t0IC')
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send email, please try again.");
      });
  };

  return (
    <header className={styles.header}>
      <img src="/images/profile.jpg" alt="Profile Picture" className={styles.profileImage} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hello, I’m Isabelle</h1>
        <p className={styles.subtitle}>
          a Frontend Developer passionate about creating modern and responsive web applications.
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={handleButtonClick} className={styles.cvButton}>
            View My CV
          </button>
          <button onClick={() => setShowContact(true)} className={styles.contactButton}>
            Contact Me
          </button>
          <a href="https://se.linkedin.com/in/isabelle-ibrahimsson-0853202a0" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://github.com/Belloshe?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          </a>
        </div>
        
        {showCV && (
          <div className={styles.modal} onClick={handleCloseClick}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={handleCloseClick}>&times;</span>
              <img src="/images/cv.jpg" alt="My CV" className={styles.cvImage} />
            </div>
          </div>
        )}

        {showContact && (
          <div className={styles.modal} onClick={handleCloseClick}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={handleCloseClick}>&times;</span>
              <h2>Contact Me</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <input type="text" name="from_name" placeholder="Your Name" className={styles.inputField} required />
                <input type="email" name="from_email" placeholder="Your Email" className={styles.inputField} required />
                <textarea name="message" placeholder="Your Message" className={styles.textArea} required></textarea>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
