import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
          <NavLink href='#skills' onClick={handleLinkClick}>Skills</NavLink>
          <NavLink href='#experience' onClick={handleLinkClick}>Experience</NavLink>
          <NavLink href='#projects' onClick={handleLinkClick}>Projects</NavLink>
          <NavLink href='#education' onClick={handleLinkClick}>Education</NavLink>
          <NavLink href='#contact' onClick={handleLinkClick}>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
          <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
          <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
          <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
          <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
          <MobileLink href='#contact' onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
          <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar;
