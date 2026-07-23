import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const School = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const Degree = styled.div`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.textMuted};
`;

const Grade = styled.div`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const Desc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.94rem;
  line-height: 1.7;
  max-width: 62ch;
`;

const Publication = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  a {
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};
    text-decoration: none;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Wrap>
      <Top>
        {education.img && <Logo src={education.img} alt="" loading="lazy" />}
        <Head>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
        </Head>
      </Top>

      {education.grade && <Grade>Grade — {education.grade}</Grade>}

      {!education.grade && education.publication && (
        <Publication>
          Publication —{" "}
          <a
            href={education.publication.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {education.publication.title}
          </a>
        </Publication>
      )}

      {education.desc && <Desc>{education.desc}</Desc>}
    </Wrap>
  );
};

export default EducationCard;
