import React from "react";
import styled from "styled-components";
import { Tag } from "../primitives";

const Card = styled.article`
  cursor: pointer;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.hairline};
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.base} ${({ theme }) => theme.ease},
    border-color ${({ theme }) => theme.base} ${({ theme }) => theme.ease};
  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.text};
  }
`;

const Shot = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.hairline};
  background: ${({ theme }) => theme.surfaceAlt};
`;

const ShotImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform ${({ theme }) => theme.base}
    ${({ theme }) => theme.ease};
  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Body = styled.div`
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: 1.16rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.25;
`;

const Date = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.textMuted};
  white-space: nowrap;
`;

const Desc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.9rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 6px;
`;

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <Shot>
        {project.image ? (
          <ShotImg src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <Placeholder>{project.title}</Placeholder>
        )}
      </Shot>
      <Body>
        <Top>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
        </Top>
        {project.description && <Desc>{project.description}</Desc>}
        {project.tags?.length > 0 && (
          <Tags>
            {project.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        )}
      </Body>
    </Card>
  );
};

export default ProjectCards;
