import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EMAILJS_CONFIG from "./emailjs.config";
import { toast } from "react-toastify";
import { Bio } from "../../data/constants";
import { Section, Inner, Eyebrow, SectionTitle, Lead } from "../primitives";

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } =
  EMAILJS_CONFIG;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 40px;
  @media (min-width: 880px) {
    grid-template-columns: 1fr 1fr;
    gap: 72px;
  }
`;

const BigLink = styled.a`
  display: inline-block;
  margin-top: 22px;
  font-family: ${({ theme }) => theme.fontSerif};
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  padding-bottom: 2px;
  word-break: break-all;
`;

const Socials = styled.ul`
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialItem = styled.a`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.86rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.textMuted};
  text-decoration: none;
  width: fit-content;
  transition: color ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textMuted};
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.hairline};
  padding: 8px 0;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color ${({ theme }) => theme.fast}
    ${({ theme }) => theme.ease};
  &:focus {
    border-bottom-color: ${({ theme }) => theme.text};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.hairline};
  padding: 8px 0;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  resize: vertical;
  min-height: 90px;
  transition: border-color ${({ theme }) => theme.fast}
    ${({ theme }) => theme.ease};
  &:focus {
    border-bottom-color: ${({ theme }) => theme.text};
  }
`;

const Submit = styled.button`
  align-self: flex-start;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.onAccent};
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 24px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: opacity ${({ theme }) => theme.fast} ${({ theme }) => theme.ease};
  &:hover {
    opacity: 0.82;
  }
  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

// UPDATE: keep these contact details current (and the mailto BigLink above).
const socials = [
  { label: "Email", href: "mailto:connect.nafizhossain@gmail.com", text: "connect.nafizhossain@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/8801521412351", text: "+88 01521-412351" },
  { label: "LinkedIn", href: Bio.linkedin, text: "in/nafizzz" },
  { label: "GitHub", href: Bio.github, text: "nafiz-hossain" },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = form.current.from_email.value;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_USER_ID
      )
      .then(() => {
        toast.success("Email sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("There was an issue sending the email. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <Section id="contact">
      <Inner>
        <Eyebrow>07 — Contact</Eyebrow>
        <SectionTitle>Get in touch</SectionTitle>
        <Grid>
          <div>
            <Lead>
              Have a role, a project, or just want to say hello? The form is the
              quickest way to reach me — I usually reply within a day.
            </Lead>
            <BigLink href="mailto:connect.nafizhossain@gmail.com">
              connect.nafizhossain@gmail.com
            </BigLink>
            <Socials>
              {socials.map((s) => (
                <SocialItem
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label} — {s.text} ↗
                </SocialItem>
              ))}
            </Socials>
          </div>

          <Form ref={form} onSubmit={handleSubmit}>
            <Field>
              <Label htmlFor="from_name">Name</Label>
              <Input id="from_name" name="from_name" placeholder="Your name" required />
            </Field>
            <Field>
              <Label htmlFor="from_email">Email</Label>
              <Input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="What's on your mind?" required />
            </Field>
            <Submit type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send message →"}
            </Submit>
          </Form>
        </Grid>
      </Inner>
    </Section>
  );
};

export default Contact;
