import React from "react";
import { Modal } from "@mui/material";
import styled from "styled-components";
import { Tag } from "../primitives";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bg}cc;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  padding: clamp(20px, 6vh, 70px) 16px;
`;

const Panel = styled.div`
  max-width: 760px;
  width: 100%;
  height: min-content;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.hairline};
  border-radius: 2px;
  padding: clamp(20px, 4vw, 36px);
  position: relative;
`;

const Close = styled.button`
  position: absolute;
  top: 14px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
  color: ${({ theme }) => theme.textMuted};
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Shot = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.hairline};
  margin-bottom: 22px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${({ theme }) => theme.text};
`;

const Date = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.textMuted};
  margin-top: 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 16px 0;
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.textMuted};
  font-size: 1rem;
  line-height: 1.75;
  margin: 8px 0 0;
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
  margin: 22px 0 10px;
`;

const MemberRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 26px;
`;

const TextLink = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  padding-bottom: 3px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  text-decoration: none;
`;

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const close = () => setOpenModal({ state: false, project: null });

  return (
    <Modal
      open={true}
      onClose={close}
      aria-labelledby="project-detail-title"
    >
      <Backdrop>
        <Panel>
          <Close onClick={close} aria-label="Close">
            ✕
          </Close>
          {project?.image && <Shot src={project.image} alt={project?.title} />}
          <Title id="project-detail-title">{project?.title}</Title>
          {project?.date && <Date>{project.date}</Date>}
          {project?.tags?.length > 0 && (
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          )}
          {project?.description && <Desc>{project.description}</Desc>}

          {project?.member?.length > 0 && (
            <>
              <Label>Team</Label>
              <MemberRow>
                {project.member.map((member) => (
                  <span key={member.name}>
                    {member.name}
                    {member.github && (
                      <>
                        {" · "}
                        <TextLink href={member.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </TextLink>
                      </>
                    )}
                    {member.linkedin && (
                      <>
                        {" · "}
                        <TextLink href={member.linkedin} target="_blank" rel="noreferrer">
                          LinkedIn ↗
                        </TextLink>
                      </>
                    )}
                  </span>
                ))}
              </MemberRow>
            </>
          )}

          <ButtonGroup>
            {project?.github && (
              <TextLink href={project.github} target="_blank" rel="noreferrer">
                View code ↗
              </TextLink>
            )}
            {project?.webapp && (
              <TextLink href={project.webapp} target="_blank" rel="noreferrer">
                Live app ↗
              </TextLink>
            )}
            {project?.link && (
              <TextLink href={project.link} target="_blank" rel="noreferrer">
                Website ↗
              </TextLink>
            )}
          </ButtonGroup>
        </Panel>
      </Backdrop>
    </Modal>
  );
};

export default index;
