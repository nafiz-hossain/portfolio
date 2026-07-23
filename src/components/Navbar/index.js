import React, { useState } from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.bg}e6;
  backdrop-filter: saturate(180%) blur(10px);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.hairline};
`;

const Row = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 40px);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fontSerif};
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 26px;
  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const GhostBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textMuted};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  line-height: 1;
  @media (max-width: 860px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  border-top: 1px solid ${({ theme }) => theme.hairline};
  background: ${({ theme }) => theme.bg};
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  padding: 16px clamp(20px, 5vw, 40px) 24px;
  gap: 16px;
`;

const MobileLink = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Row>
        <Logo href="#home">Nafiz H.</Logo>
        <Links>
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
        </Links>
        <Right>
          <GhostBtn as="a" href={Bio.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </GhostBtn>
          <GhostBtn
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle colour theme"
            title="Toggle theme"
          >
            {darkMode ? "Light ☀" : "Dark ☾"}
          </GhostBtn>
          <Burger onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </Burger>
        </Right>
      </Row>
      <MobileMenu $open={open}>
        {links.map((l) => (
          <MobileLink
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </MobileLink>
        ))}
        <MobileLink
          href={Bio.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          GitHub ↗
        </MobileLink>
      </MobileMenu>
    </Bar>
  );
};

export default Navbar;
