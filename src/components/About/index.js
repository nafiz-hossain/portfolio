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

// NOTE: About copy complements the hero bio (Bio.description). Update freely.
const About = () => {
  return (
    <Section id="about">
      <Inner>
        <Eyebrow>01 - About</Eyebrow>
        <SectionTitle>About</SectionTitle>
        <Grid>
          <Copy>
            <Para>
              Quality isn't a final checkpoint - it's something I build in
              early. I work across the whole lifecycle: shaping test strategy
              before a feature is written, automating the repeatable work, and
              watching for the edge cases that slip past happy-path testing.
            </Para>
            <Para>
              That covers functional, integration, regression, security, and
              performance testing - often on systems where the stakes are real,
              from national identity platforms to live client products. I've
              also led and mentored QA engineers across large engagements,
              because good automation only goes as far as the team's judgment
              about risk.
            </Para>
          </Copy>
          <Meta>
            <MetaKey>Role</MetaKey>
            <MetaVal>Senior SQA Engineer</MetaVal>
            <MetaKey>Company</MetaKey>
            <MetaVal>Exabyting</MetaVal>
            <MetaKey>Focus</MetaKey>
            <MetaVal>Test automation, AI-driven testing, API &amp; performance</MetaVal>
          </Meta>
        </Grid>
      </Inner>
    </Section>
  );
};

export default About;
