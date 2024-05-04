  import React, { useRef } from 'react';
  import styled from "styled-components";
  import emailjs from "@emailjs/browser";
  import EMAILJS_CONFIG from "./emailjs.config";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = EMAILJS_CONFIG;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    z-index: 9999;
  `;
  // const Container = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: relative;
  //   height: 100vh; /* Ensure the container takes up the full viewport height */
  // `;


  const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 12px;
    z-index: 9999;

  `;



  // const Wrapper = styled.div`
  //   display: flex;
  //   postion: relative;
  //   flex-direction: column;
  //   justify-content: space-between;

  //   align-items: center;
  //   max-width: 600px;
  //   width: 100%; /* Ensure the wrapper takes up the full width */
  //   padding: 20px;
  // `;


  const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

  `;

  const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};

  `;
  const ContactForm = styled.form`
    width: 100%;
    max-width: 550px; /* Adjust the maximum width as needed for smaller screens */
    margin: 0 auto; /* Center the form horizontally */
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    padding: 12px 16px;
    border-radius: 16px;
    box-shadow: rgba(14, 167, 247, 0.15) 0px 4px 24px;
    margin-top: 28px;
    gap: 12px;
    border: 0.1px solid #306EE8;
    @media only screen and (max-width: 768px){

      width: 330px;
  }
  `;


  const ContactTitle = styled.div`
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){

      width: 300px;
  }
  `;

  const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
    @media only screen and (max-width: 768px){

      width: 300px;
  }
  `;

  const ContactInputMessage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.primary};
    }
    @media only screen and (max-width: 768px){

      width: 300px;
  }
  `;

  const ContactButton = styled.input`
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.button_gradient};
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(225deg, #056fa6 0%, #07354d 100%);
    box-shadow: 16px 16px 48px rgba(25, 25, 25, 0.5), -16px -16px 48px rgba(25, 25, 25, 0.5);
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      transition: all 0.4s ease-in-out;
      box-shadow: 16px 16px 48px rgba(25, 25, 25, 0.6), -16px -16px 48px rgba(25, 25, 25, 0.6);
    }
    @media only screen and (max-width: 768px){
   
      width: 300px;
  }
  `;

  const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      const email = form.current.from_email.value;
    
      if (!emailPattern.test(email)) {
        toast.error('Please enter a valid email address.');
        return; 
      }
    
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_USER_ID)
        .then((result) => {
          toast.success('Email sent successfully!');
          form.current.reset();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          toast.error('There was an issue sending the email. Please try again later.');
        });
    };
    
    const CustomToastContainer = styled(ToastContainer)`
    .Toastify__toast-container {
      bottom: 220px;
      position: fixed;
      z-index: 9999;
      overflow: visible!important;
      margin-top: 200px; /* Adjust as needed */
    }
  `;

    return (
      
      <Container>
        <Wrapper>
        <div id="contact">
          <Title>Contact</Title>
          <Desc>
          Don't hesitate to contact me if you have any inquiries or opportunities!
          </Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" required/>
            <ContactInput placeholder="Your Name" name="from_name" required/>
            <ContactInput placeholder="Subject" name="subject" required/>
            <ContactInputMessage placeholder="Message" rows="4" name="message" required/>
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          {/* <CustomToastContainer position="bottom-center"  autoClose={10000000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}
          </div>
        </Wrapper>
      </Container>
    
    );
  };

  export default Contact;


