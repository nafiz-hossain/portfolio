import React from "react";
import styled from "styled-components";
import { Section, Inner, Eyebrow, SectionTitle } from "../primitives";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 36px;
  margin-top: 40px;
  @media (min-width: 860px) {
    grid-template-columns: 1.4fr 0.8fr;
    gap: 64px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Para = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.04rem;
  line-height: 1.8;
  margin: 0;
  max-width: 60ch;
`;

const Meta = styled.dl`
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 14px;
  column-gap: 24px;
  font-size: 0.92rem;
`;

const MetaKey = styled.dt`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  padding-top: 2px;
`;

const MetaVal = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

// NOTE: copy below paraphrases Bio.description (constants.js). Update freely.
const About = () => {
  return (
    <Section id="about">
      <Inner>
        <Eyebrow>01 — About</Eyebrow>
        <SectionTitle>About</SectionTitle>
        <Grid>
          <Copy>
            <Para>
              I'm a Senior SQA Engineer at Exabyting, where I help teams ship
              high-quality software through strong testing strategies,
              automation, and attention to the details that are easy to miss.
            </Para>
            <Para>
              My work spans test automation, API and performance testing, and
              building quality into the development process itself — so teams
              can move quickly without breaking trust. I care about reliable,
              repeatable tests and continuous improvement across every project.
            </Para>
          </Copy>
          <Meta>
            <MetaKey>Role</MetaKey>
            <MetaVal>Senior SQA Engineer</MetaVal>
            <MetaKey>Company</MetaKey>
            <MetaVal>Exabyting</MetaVal>
            <MetaKey>Focus</MetaKey>
            <MetaVal>Test automation, API &amp; performance testing</MetaVal>
          </Meta>
        </Grid>
      </Inner>
    </Section>
  );
};

export default About;
