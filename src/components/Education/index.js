import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";
import EducationEntry from "../Cards/EducationCard";

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
  color: ${({ theme }) => theme.textMuted};
  padding-top: 6px;
`;

const Education = () => {
  return (
    <Section id="education">
      <Inner>
        <Eyebrow>05 - Education</Eyebrow>
        <SectionTitle>Education</SectionTitle>
        <Lead>Academic background and the foundations behind the practice.</Lead>
        <List>
          {education.map((ed) => (
            <Row key={ed.school}>
              <DateCol>{ed.date}</DateCol>
              <EducationEntry education={ed} />
            </Row>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

export default Education;
