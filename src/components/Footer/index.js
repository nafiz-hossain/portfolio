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
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
  z-index: 10;
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  z-index: 10;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
  z-index: 10;
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
const ContactInfo = styled.div`
font-weight: 600;
font-size: 20px;
`;

const ContactDetail = styled.div`
font-weight: 600;
font-size: 20px;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
      <Logo style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Md. Nafiz Hossain</Logo>
        <ContactInfo>
          <ContactDetail style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', marginBottom: '0.25rem' }}>
            <FiMail style={{ marginRight: '0.5rem' }} /> nhremon8181@gmail.com
          </ContactDetail>
          <ContactDetail style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', marginBottom: '0.25rem' }}>
            <FiPhone style={{ marginRight: '0.5rem' }} /> +8801521412351
            </ContactDetail>

            
            <ContactDetail style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', marginBottom: '0.25rem' }}>

            <FiPhone style={{ marginRight: '0.5rem' }} /> +8801792175054

          </ContactDetail>
        </ContactInfo>




        {/* <Nav style={{ marginTop: '1rem' }}>
          <NavLink href="#about" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>About</NavLink>
          <NavLink href="#skills" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>Skills</NavLink>
          <NavLink href="#experience" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>Experience</NavLink>
          <NavLink href="#projects" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>Projects</NavLink>
          <NavLink href="#education" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>Education</NavLink>
          <NavLink href="#contact" style={{ textDecoration: 'none', color: '#D3D3D3', marginRight: '1rem' }}>Contact</NavLink>
        </Nav> */}
        <SocialMediaIcons style={{ marginTop: '5rem' }}>
          <SocialMediaIcon href={Bio.facebook} target="_blank" style={{ marginRight: '0.5rem' }}><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank" style={{ marginRight: '0.5rem' }}><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank" style={{ marginRight: '0.5rem' }}><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', color: '#666', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          &copy; 2023 Nafiz Hossain. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}



export default Footer;