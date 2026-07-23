import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";

const Foot = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.hairline};
  padding: clamp(40px, 6vw, 64px) clamp(20px, 5vw, 40px) 48px;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.fontSerif};
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Tagline = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.textMuted};
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SocialLink = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.hairline};
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.textMuted};
`;

const BackTop = styled.a`
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Footer = () => {
  return (
    <Foot>
      <Inner>
        <Top>
          <Brand>
            <Name>{Bio.name}</Name>
            <Tagline>Senior SQA Engineer</Tagline>
          </Brand>
          <Socials>
            <SocialLink href={Bio.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </SocialLink>
            <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </SocialLink>
            <SocialLink href={Bio.insta} target="_blank" rel="noreferrer">
              Instagram ↗
            </SocialLink>
          </Socials>
        </Top>
        <Bottom>
          <span>
            © {new Date().getFullYear()} {Bio.name}. All rights reserved.
          </span>
          <BackTop href="#home">Back to top ↑</BackTop>
        </Bottom>
      </Inner>
    </Foot>
  );
};

export default Footer;
