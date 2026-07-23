import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// Subtle scroll-reveal: fades + lifts content in as it enters the viewport.
// Honours prefers-reduced-motion (jumps straight to visible). No dependencies.
const Box = styled.div`
  opacity: ${({ $in }) => ($in ? 1 : 0)};
  transform: translateY(${({ $in }) => ($in ? "0" : "18px")});
  transition:
    opacity 600ms ${({ theme }) => theme.ease},
    transform 600ms ${({ theme }) => theme.ease};
  transition-delay: ${({ $delay }) => $delay || "0ms"};
  will-change: opacity, transform;
`;

const Reveal = ({ children, delay = 0, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Bail to "visible" when the browser/test env lacks the APIs we need.
    const supports =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      typeof IntersectionObserver !== "undefined";
    if (
      !supports ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box ref={ref} $in={shown} $delay={delay} {...rest}>
      {children}
    </Box>
  );
};

export default Reveal;
