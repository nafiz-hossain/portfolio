import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import 'react-toastify/dist/ReactToastify.css'
import { FiMail, FiPhone } from 'react-icons/fi'; // Import icons from react-icons library



const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5rem 0 1.2rem 0;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 2px 12px 0 ${({ theme }) => theme.primary}22;
  z-index: 10;
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  padding: 1.5rem 1rem 1rem 1rem;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 ${({ theme }) => theme.primary}11;
`;

const Name = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.3rem;
  letter-spacing: 0.5px;
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 ${({ theme }) => theme.primary}22;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  margin-bottom: 0.2rem;
  border: 1px solid ${({ theme }) => theme.primary}55;
  @media (max-width: 480px) {
    padding: 0.8rem 0.7rem;
    width: 100%;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  gap: 0.6rem;
  margin-bottom: 0.1rem;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary}22;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  box-shadow: 0 1px 4px 0 ${({ theme }) => theme.primary}22;
  border: 1.5px solid ${({ theme }) => theme.primary}55;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg};
    box-shadow: 0 2px 8px 0 ${({ theme }) => theme.primary}44;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.primary}33;
  margin: 1.2rem 0 0.5rem 0;
`;

const Copyright = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-top: 0.3rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Name>Md. Nafiz Hossain</Name>
        <ContactCard>
          <ContactDetail>
            <a href="mailto:nhremon8181@gmail.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FiMail /> nhremon8181@gmail.com
            </a>
          </ContactDetail>
          <ContactDetail>
            <a href="tel:+8801521412351" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FiPhone /> +8801521412351
            </a>
          </ContactDetail>
          <ContactDetail>
            <a href="tel:+8801792175054" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FiPhone /> +8801792175054
            </a>
          </ContactDetail>
        </ContactCard>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="_blank"><FacebookIcon fontSize="inherit" /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank"><LinkedInIcon fontSize="inherit" /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank"><InstagramIcon fontSize="inherit" /></SocialMediaIcon>
        </SocialMediaIcons>
        <Divider />
        <Copyright>
          &copy; {new Date().getFullYear()} Nafiz Hossain. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}



export default Footer;