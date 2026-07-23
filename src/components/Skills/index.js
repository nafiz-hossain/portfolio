import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";

const Groups = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 28px 0;
  border-top: 1px solid ${({ theme }) => theme.hairline};
  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.hairline};
  }
  @media (min-width: 760px) {
    grid-template-columns: 220px 1fr;
    gap: 32px;
    align-items: start;
  }
`;

const GroupTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  padding-top: 8px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.hairline};
  padding: 7px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.surface};
  transition: border-color ${({ theme }) => theme.fast}
      ${({ theme }) => theme.ease},
    color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    border-color: ${({ theme }) => theme.text};
  }
`;

const ItemIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Section id="skills">
      <Inner>
        <Eyebrow>02 — Toolkit</Eyebrow>
        <SectionTitle>Skills &amp; tools</SectionTitle>
        <Lead>
          The tools and technologies I lean on to design tests, automate them,
          and keep quality high across the stack.
        </Lead>
        <Groups>
          {skills.map((group) => (
            <Group key={group.title}>
              <GroupTitle>{group.title}</GroupTitle>
              <Items>
                {group.skills.map((item) => (
                  <Item key={item.name}>
                    {item.image && (
                      <ItemIcon src={item.image} alt="" loading="lazy" />
                    )}
                    {item.name}
                  </Item>
                ))}
              </Items>
            </Group>
          ))}
        </Groups>
      </Inner>
    </Section>
  );
};

export default Skills;
