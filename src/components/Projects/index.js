import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";
import ProjectCard from "../Cards/ProjectCards";

const filters = [
  { key: "all", label: "All" },
  { key: "office", label: "Industrial" },
  { key: "personal", label: "Personal" },
];

const Tabs = styled.div`
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $active, theme }) => ($active ? theme.text : theme.textMuted)};
  border-bottom: 1px solid
    ${({ $active, theme }) => ($active ? theme.text : "transparent")};
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease},
    border-color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 26px;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const list =
    toggle === "all" ? projects : projects.filter((p) => p.category === toggle);

  return (
    <Section id="projects">
      <Inner>
        <Eyebrow>04 — Selected work</Eyebrow>
        <SectionTitle>Selected work</SectionTitle>
        <Lead>
          A mix of industrial and personal projects — from test automation and
          internal tools to small apps I built to learn.
        </Lead>
        <Tabs>
          {filters.map((f) => (
            <Tab
              key={f.key}
              $active={toggle === f.key}
              onClick={() => setToggle(f.key)}
            >
              {f.label}
            </Tab>
          ))}
        </Tabs>
        <Grid>
          {list.map((project) => (
            <ProjectCard
              key={project.id ?? project.title}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default Projects;
