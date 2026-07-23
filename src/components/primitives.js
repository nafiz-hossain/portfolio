import styled from "styled-components";

// Mono Editorial - shared building blocks so every section reads as one system.

// Full-bleed section with a top hairline and generous vertical rhythm.
export const Section = styled.section`
  border-top: 1px solid ${({ theme }) => theme.hairline};
  padding: clamp(64px, 9vw, 116px) clamp(20px, 5vw, 40px);
  background: ${({ $alt, theme }) => ($alt ? theme.surfaceAlt : "transparent")};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

// Small mono label, e.g. "01 - Experience".
export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontSerif};
  font-weight: 500;
  font-size: clamp(1.85rem, 4.2vw, 2.7rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.text};
  margin: 14px 0 0;
`;

export const Lead = styled.p`
  max-width: 58ch;
  color: ${({ theme }) => theme.textMuted};
  font-size: 1.02rem;
  line-height: 1.75;
  margin: 16px 0 0;
`;

// Hairline pill tag (mono).
export const Tag = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.textMuted};
  border: 1px solid ${({ theme }) => theme.hairline};
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
`;

// Text link with an arrow that nudges on hover.
export const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  padding-bottom: 3px;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  transition: gap ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    gap: 14px;
  }
`;
