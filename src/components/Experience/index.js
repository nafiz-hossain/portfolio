import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";
import ExperienceEntry from "../Cards/ExperienceCard";

const List = styled.div`
  margin-top: 44px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  padding: 30px 0;
  border-top: 1px solid ${({ theme }) => theme.hairline};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.hairline};
  }
  @media (min-width: 760px) {
    grid-template-columns: 180px 1fr;
    gap: 40px;
  }
`;

const DateCol = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.textMuted};
  padding-top: 6px;
`;

const Experience = () => {
  return (
    <Section id="experience">
      <Inner>
        <Eyebrow>03 - Experience</Eyebrow>
        <SectionTitle>Where I've worked</SectionTitle>
        <Lead>
          A few years of building test automation, shipping quality software,
          and collaborating with engineering teams.
        </Lead>
        <List>
          {experiences.map((exp) => (
            <Row key={exp.id ?? exp.role}>
              <DateCol>{exp.date}</DateCol>
              <ExperienceEntry experience={exp} />
            </Row>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

export default Experience;
