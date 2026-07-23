import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";

const List = styled.div`
  margin-top: 44px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.hairline};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.hairline};
  }
  @media (min-width: 760px) {
    grid-template-columns: 180px 1fr auto;
    gap: 32px;
    align-items: baseline;
  }
`;

const Meta = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textMuted};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const Credential = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.textMuted};
`;

const Verify = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 2px;
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
  }
`;

const Certifications = () => {
  return (
    <Section id="certifications">
      <Inner>
        <Eyebrow>06 - Certifications</Eyebrow>
        <SectionTitle>Certifications</SectionTitle>
        <Lead>Recent credentials, both verifiable online.</Lead>
        <List>
          {certifications.map((cert) => (
            <Row key={cert.id}>
              <Meta>
                {cert.issuer}
                <br />
                {cert.date}
              </Meta>
              <Body>
                <Title>{cert.title}</Title>
                <Credential>Credential ID - {cert.credentialId}</Credential>
              </Body>
              <Verify
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify ↗
              </Verify>
            </Row>
          ))}
        </List>
      </Inner>
    </Section>
  );
};

export default Certifications;
