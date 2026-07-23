import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";
import ProjectCard from "../Cards/ProjectCards";

const Grid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 26px;
`;

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Section id="projects">
      <Inner>
        <Eyebrow>04 - Selected work</Eyebrow>
        <SectionTitle>Selected work</SectionTitle>
        <Lead>
          Industrial QA engagements across enterprise, government, and product
          teams, from end-to-end test strategy and automation frameworks to
          AI-driven testing.
        </Lead>
        <Grid>
          {projects.map((project) => (
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
