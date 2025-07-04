import React, { useRef, useState } from 'react';
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EMAILJS_CONFIG from "./emailjs.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaFacebookF, FaLinkedinIn, FaPhone, FaUser, FaEnvelope, FaRegCommentDots, FaPaperPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Bio } from '../../data/constants';

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
  max-width: 550px;
  min-height: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 12px 16px;
  border-radius: 16px;
  box-shadow: rgba(14, 167, 247, 0.15) 0px 4px 24px;
  gap: 12px;
  border: 0.1px solid #306EE8;
  justify-content: center;
  @media only screen and (max-width: 768px){
    width: 330px;
    min-height: unset;
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

const FormRow = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const IconInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 48px;
  border-radius: 40px;
  border: 1.5px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.1rem;
  outline: none;
  margin-bottom: 0;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.primary};
  }
`;

const IconTextarea = styled.textarea`
  width: 100%;
  padding: 16px 16px 16px 48px;
  border-radius: 32px;
  border: 1.5px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.1rem;
  outline: none;
  min-height: 120px;
  resize: vertical;
  margin-bottom: 0;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.primary};
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.2em;
`;

const Spinner = styled.div`
  border: 3px solid #fff;
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 22px;
  height: 22px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SendButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(225deg, #056fa6 0%, #07354d 100%);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 40px;
  padding: 18px 0;
  margin-top: 18px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 16px 0 ${({ theme }) => theme.primary}22;
  &:hover {
    background: ${({ theme }) => theme.primary};
    transform: scale(1.03);
  }
`;

const ContactSection = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  padding: 60px 0 80px 0;
`;

const ContactGroup = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  @media (max-width: 1100px) {
    gap: 32px;
    max-width: 95vw;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const InfoPanel = styled.div`
  flex: 1;
  min-width: 400px;
  max-width: 480px;
  min-height: 420px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 ${({ theme }) => theme.primary}11;
  padding: 32px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 900px) {
    min-width: 0;
    max-width: 100%;
    min-height: unset;
    padding: 24px 12px;
    align-items: center;
  }
`;

const InfoTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
  text-transform: uppercase;
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const InfoDesc = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 18px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.08rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 10px;
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const email = form.current.from_email.value;
  
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address.');
      return; 
    }
  
    setLoading(true);
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_USER_ID)
      .then((result) => {
        toast.success('Email sent successfully!');
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('There was an issue sending the email. Please try again later.');
        setLoading(false);
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
    <ContactSection>
      <ContactGroup>
        <InfoPanel>
          <InfoTitle>
            GET <span>IN</span> TOUCH
          </InfoTitle>
          <InfoDesc>
            If you need any kind of information or help, feel free to contact with me. If you have any suggestion, project or even you want to say Hello, please fill out the form and I will reply you shortly.
          </InfoDesc>
          <InfoItem>
            <FaWhatsapp style={{ color: '#25D366' }} />
            <a href="https://wa.me/8801521412351" target="_blank" rel="noopener noreferrer">+88 01521-412351</a>
          </InfoItem>
          <InfoItem>
            <FaPhone style={{ color: '#0EA7F7' }} />
            <a href="tel:+8801521412351">+88 01521-412351</a>
          </InfoItem>
          <InfoItem>
            <FiMail />
            <a href="mailto:nhremon8181@gmail.com">nhremon8181@gmail.com</a>
          </InfoItem>
          <InfoItem>
            <FaInstagram style={{ color: '#E1306C' }} />
            <a href={Bio.insta} target="_blank" rel="noopener noreferrer">nafizzzzzzz</a>
          </InfoItem>
          <InfoItem>
            <FaFacebookF style={{ color: '#1877F3' }} />
            <a href={Bio.facebook} target="_blank" rel="noopener noreferrer">nhremon</a>
          </InfoItem>
          <InfoItem>
            <FaLinkedinIn style={{ color: '#0A66C2' }} />
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">nafizzz</a>
          </InfoItem>
        </InfoPanel>
        <div style={{ flex: 2, minWidth: 380, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me</ContactTitle>
            <FormRow>
              <InputWrapper>
                <InputIcon><FaUser /></InputIcon>
                <IconInput placeholder="Your Name" name="from_name" required />
              </InputWrapper>
              <InputWrapper>
                <InputIcon><FaEnvelope /></InputIcon>
                <IconInput placeholder="Your Email" name="from_email" required />
              </InputWrapper>
            </FormRow>
            <InputWrapper style={{ width: '100%' }}>
              <InputIcon><FaRegCommentDots /></InputIcon>
              <IconTextarea placeholder="Message" name="message" required rows={4} />
            </InputWrapper>
            <SendButton type="submit" disabled={loading}>
              {loading ? <Spinner /> : <FaPaperPlane />}
              {loading ? 'Sending...' : 'SEND MESSAGE'}
            </SendButton>
          </ContactForm>
        </div>
      </ContactGroup>
    </ContactSection>
  );
};

export default Contact;


