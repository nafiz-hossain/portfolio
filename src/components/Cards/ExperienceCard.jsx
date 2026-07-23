import React from "react";
import styled from "styled-components";
import { Tag } from "../primitives";

const orgLinks = {
  "Tiger IT Bangladesh Ltd": "https://tigerit.com",
  Exabyting: "https://exabyting.com",
  "Project- Feed-a-Family": "https://www.facebook.com/projectfeedafamily",
  "CSEDU Students' Club": "https://www.facebook.com/CSEDUSC/",
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
`;

const Role = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
`;

const Company = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease},
    border-color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
    border-bottom-color: ${({ theme }) => theme.text};
  }
`;

const CompanyText = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.82rem;
  color: ${({ theme }) => theme.textMuted};
`;

const Desc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.96rem;
  line-height: 1.7;
  max-width: 62ch;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

const ExperienceCard = ({ experience }) => {
  const orgUrl = orgLinks[experience.company] || null;
  return (
    <Wrap>
      <Top>
        <Role>{experience.role}</Role>
        {orgUrl ? (
          <Company href={orgUrl} target="_blank" rel="noopener noreferrer">
            {experience.company} ↗
          </Company>
        ) : (
          <CompanyText>{experience.company}</CompanyText>
        )}
      </Top>
      {experience.desc && <Desc>{experience.desc}</Desc>}
      {experience.skills?.length > 0 && (
        <SkillList>
          {experience.skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </SkillList>
      )}
    </Wrap>
  );
};

export default ExperienceCard;
