import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import portrait from "../../images/vanfare.jpg";

const Hero = styled.section`
  padding: clamp(56px, 9vw, 104px) clamp(20px, 5vw, 40px)
    clamp(48px, 7vw, 80px);
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 44px;
  align-items: center;
  @media (min-width: 900px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: clamp(2.4rem, 7vw, 4.1rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.text};
  margin: 18px 0 0;
`;

const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fontSerif};
  font-style: italic;
  font-size: clamp(1.1rem, 2.4vw, 1.4rem);
  color: ${({ theme }) => theme.textMuted};
  margin: 14px 0 0;
  max-width: 30ch;
`;

const Desc = styled.p`
  max-width: 52ch;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.02rem;
  line-height: 1.75;
  margin: 22px 0 0;
`;

const CTAs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 22px 28px;
  margin-top: 32px;
`;

const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  transition: gap ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  text-decoration: none;
  &:hover {
    gap: 14px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const PortraitWrap = styled.div`
  justify-self: center;
  width: 100%;
  max-width: 320px;
  @media (min-width: 900px) {
    justify-self: end;
    max-width: 340px;
  }
`;

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 2px;
  filter: grayscale(0.12) contrast(1.02);
`;

const CompilationSection = () => {
  return (
    <Hero id="home">
      <Inner>
        <div>
          <Eyebrow>Senior SQA Engineer</Eyebrow>
          <Name>{Bio.name}</Name>
          <Tagline>Quality, automated — so teams can ship without surprises.</Tagline>
          <Desc>{Bio.description}</Desc>
          <CTAs>
            <ArrowLink href="#projects">
              View work <span aria-hidden>→</span>
            </ArrowLink>
            <ArrowLink href={Bio.resume} target="_blank" rel="noreferrer">
              Résumé <span aria-hidden>↓</span>
            </ArrowLink>
          </CTAs>
          <Socials>
            <SocialLink href={Bio.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </SocialLink>
            <SocialLink href={Bio.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </SocialLink>
          </Socials>
        </div>
        <PortraitWrap>
          <Portrait src={portrait} alt="Md. Nafiz Hossain" loading="lazy" />
        </PortraitWrap>
      </Inner>
    </Hero>
  );
};

export default CompilationSection;
