// ─────────────────────────────────────────────────────────────────────────
// Portfolio content. Everything on the site reads from this single file.
// UPDATE THESE FIELDS as things change — Bio.resume, experiences[] dates/
// roles/companies, projects[], education[], certifications[]. Contact details
// (email, phone) live in src/components/Contact/index.js.
// ─────────────────────────────────────────────────────────────────────────

export const Bio = {
  name: "Md. Nafiz Hossain",
  // Optional rotating titles. The hero shows a static role by default; if you
  // re-enable a typewriter, these are the strings it cycles through.
  roles: ["Senior SQA Engineer", "Senior Test Automation Engineer"],
  description: "As a Senior SQA Engineer at Exabyting, I ensure the delivery of high-quality software through strong testing strategies, automation, and attention to detail. I'm committed to exceeding client expectations and driving continuous improvement across every project.",
  github: "https://github.com/nafiz-hossain",
  resume:
    "https://drive.google.com/file/d/1D76tViXFBCpA2liTJFgP99BoPXF0Zd39/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nafizzz/",
  insta: "https://www.instagram.com/nafizzzzzzz/",
  facebook: "https://www.facebook.com/nhremon/",
};

const icon = (file) =>
  `https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/${file}`;

export const skills = [
  {
    title: "Test Automation",
    skills: [
      { name: "Playwright" },
      { name: "Selenium", image: icon("selenium.png") },
      { name: "Cypress", image: icon("cypress.png") },
      { name: "PyAutoGUI", image: icon("pyautogui.png") },
      { name: "Pytest" },
      { name: "TestNG" },
      { name: "Appium" },
    ],
  },
  {
    title: "API & Performance Testing",
    skills: [
      { name: "Postman", image: icon("postman.png") },
      { name: "Newman" },
      { name: "REST Assured" },
      { name: "JMeter", image: icon("jmeter.png") },
      { name: "k6" },
      { name: "MQTTX", image: icon("mqttx.png") },
      { name: "Burp Suite", image: icon("burpsuite.png") },
      { name: "OWASP ZAP" },
      { name: "Lighthouse" },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python", image: icon("python-original.svg") },
      { name: "Java", image: icon("java-original.svg") },
      { name: "TypeScript", image: icon("typescript.png") },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Bash", image: icon("shell.png") },
      { name: "Spring Boot" },
      { name: "React" },
      { name: "Flutter" },
      { name: "Electron" },
      { name: "Node.js", image: icon("node-js.svg") },
      { name: "Kotlin", image: icon("kotlinlang-icon.svg") },
    ],
  },
  {
    title: "Databases & Messaging",
    skills: [
      { name: "PostgreSQL", image: icon("postgres.png") },
      { name: "MySQL", image: icon("mysql-original-wordmark.svg") },
      { name: "Redis", image: icon("redis.svg") },
      { name: "Elasticsearch" },
      { name: "Kafka" },
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: [
      { name: "Docker", image: icon("docker.png") },
      { name: "Jenkins", image: icon("jenkins.png") },
      { name: "GitHub Actions", image: icon("githubactions.png") },
      { name: "AWS" },
      { name: "Kubernetes" },
      { name: "Git", image: icon("git.jpg") },
      { name: "Bitbucket", image: icon("bitbucket.png") },
      { name: "GitHub", image: icon("GitHub-Mark.png") },
      { name: "Jira", image: icon("jira.png") },
      { name: "Asana", image: icon("asana.png") },
      { name: "TestRail" },
      { name: "VS Code", image: icon("vscode.png") },
      { name: "Figma", image: icon("figma.png") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: '', // TODO: re-add exabyting logo to src/images/icons/ and reference it
    role: "Senior Software Engineer QA",
    company: "Exabyting",
    date: "June 2024 - Present",
    desc: "Lead QA for a European client project — managing a two-person QA team, mentoring juniors, and owning quality across releases. I cover functional, integration, regression, security, and performance testing; build automation with Playwright and Python/pytest; and integrate automated tests into CI/CD. I also run knowledge-sharing sessions and pilot AI tooling to speed up requirement analysis and test creation.",
    skills: [
      "Playwright",
      "Python",
      "Pytest",
      "Postman",
      "JMeter",
      "PostgreSQL",
      "Spring Boot",
      "CI/CD",
      "Jira",
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/ti-logo.png",
    role: "Software Engineer QA",
    company: "Tiger IT Bangladesh Ltd",
    date: "June 2020 - June 2024",
    desc: "Owned functional, integration, performance, security, and regression testing across government and enterprise systems. Built test automation with Selenium, Cypress, and PyAutoGUI; performed API testing with Postman and load testing with JMeter; and integrated CI/CD pipelines using Jenkins and Docker. Led and mentored junior QA engineers on large-scale projects.",
    skills: [
      "Selenium",
      "Cypress",
      "PyAutoGUI",
      "Postman",
      "JMeter",
      "Jenkins",
      "Docker",
      "TypeScript",
      "Electron",
    ],
    doc: "",
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/project-feed-a-family.jpg",
    role: "Co Founder",
    company: "Project- Feed-a-Family",
    date: "Mar 2020 - Present",
    desc: "During the 2020 COVID-19 pandemic, global solidarity emerged as governments, organizations, and individuals joined forces to address the crisis. Despite initial hurdles, we provided essential aid to over 300 households, with ongoing efforts to assist more.",
    skills: [
      "Volunteering",
      "Communication",
      "Collaboration",
    ],
    doc: "",
  },
  {
    id: 3,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/csedusc.jpeg",
    role: "General Secretary",
    company: "CSEDU Students' Club",
    date: "Jan 2019 - Feb 2020",
    desc: "This club is the voice of the students of CSEDU. It represents them and their thoughts are expressed through it. The motivation of this club is for building a better nation through innovation.",
    skills: [
      "Effective Communication",
      "Leadership",
      "Time Management",
      "Responsibility",
      "Accountability",
      "Innovation",
    ],
    doc: "",
  },
  {
    id: 4,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/csedusc.jpeg",
    role: "Executive Member",
    company: "CSEDU Students' Club",
    date: "Jan 2018 - Jan 2019",
    desc: "The club, embodying the voices of CSEDU students, is committed to innovation for national progress. As part of the club, I fundraised from alumni and distributed winter clothes for two years in Kurigram and Dinajpur.",
    skills: [
      "Teamwork",
      "Organizational Skills",
      "Networking",
      "Fundraising",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/Dhaka_University_logo.png",
    school: "University of Dhaka",
    date: "Jan 2015 - Dec 2019",
    publication: {
      title: "A Fast and Compact Binary to BCD Converter Circuit",
      url: "https://ieeexplore.ieee.org/abstract/document/9019980"
    },
    desc: "I graduated from the University of Dhaka with a Bachelor of Science in Computer Science in 2020. Additionally, I was honored with the WIECON – ECE 2019 Best Paper Award for my work on VLSI, Circuits & Systems presented at the 5th IEEE International WIE Conference in Electrical and Electronic Engineering in November 2019.",
    degree: "B.Sc in Computer Science",
  },
  {
    id: 1,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/ccj.png",
    school: "Cantonment College, Jessore",
    date: "2011 - 2013",
    grade: "GPA 5.00",
    desc: "At Cantonment College, Jessore, I achieved a perfect GPA in my Higher Secondary Certificate in Science from 2011 to 2013. I was also awarded the Education Board Scholarship and ranked 121st in the Board Merit.",
    degree: "Higher Secondary Certificate in Science",
  },
  {
    id: 2,
    img: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/icons/jzs.png",
    school: "Jessore Zilla School",
    date: "2005 - 2011",
    grade: "GPA 5.00",
    desc: "At Jessore Zilla School, I completed my Secondary School Certificate in Science from 2005 to 2011 with a perfect GPA of 5.00. Additionally, I received the Secondary School Certificate Education Board Scholarship from the Government of Bangladesh and achieved a Board Merit ranking of 1287th.",
    degree: "Secondary School Certificate in Science",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Playwright 102 Certification",
    issuer: "LambdaTest",
    date: "2026", // adjust the exact month/year if different
    credentialId: "P102-R5DXS6",
    url: "https://www.lambdatest.com/certified/P102-R5DXS6",
  },
  {
    id: 2,
    title: "Playwright 101 Certification",
    issuer: "LambdaTest",
    date: "2026", // adjust the exact month/year if different
    credentialId: "P101-FBE5PP",
    url: "https://www.lambdatest.com/certified/P101-FBE5PP",
  },
];

// Curated to a senior SQA profile. Industrial (office) projects lead with the
// most recent Exabyting engagements. Projects without a screenshot render a
// tasteful placeholder until you drop in real images.
export const projects = [
  {
    id: 101,
    title: "The Loge System",
    date: "Feb 2025 - Present",
    description: "Senior QA lead for a multi-role business platform (Spring Boot 3.5, Java 25, PostgreSQL). I designed the end-to-end QA strategy, automated regression with Playwright (cutting manual effort ~40%), built a Python/pytest/requests API framework with multi-role JWT handling, ran load simulations (1,000 users, 400+ concurrent registrations), verified AWS SQS webhook processing with LocalStack, and owned billing-migration testing. Automated API tests run in CI/CD via Maven and GitHub Actions.",
    tags: ["Playwright", "Python", "pytest", "Spring Boot", "PostgreSQL", "AWS SQS", "CI/CD"],
    category: "office",
    link: "https://the-loge.com/en/",
    // image: add a screenshot here when available
  },
  {
    id: 102,
    title: "Empatick",
    date: "Jul 2024 - Aug 2025",
    description: "An AI-powered SMS engagement platform. I designed test strategies for broadcast scheduling, mood analytics, and survey tracking; built a comprehensive Python/pytest/requests API framework covering OTP, user management, and survey workflows with CI/CD reporting; and ran JMeter stress/load tests for bulk SMS broadcasts and real-time analytics dashboards, verifying SMS-gateway integrations and delivery logging.",
    tags: ["Python", "pytest", "requests", "JMeter", "API Testing", "CI/CD"],
    category: "office",
    link: "https://empatick.com/en",
  },
  {
    id: 103,
    title: "Aladin",
    date: "Jul 2024 - Aug 2025",
    description: "An attendance and leave-management product on Flutter mobile and React web. I performed end-to-end testing across attendance tracking, remote check-ins, leave applications, and approval workflows; validated Spring Boot + PostgreSQL backend logic through raw SQL; and ran regression testing during feature rollouts and hotfix releases to keep the platform stable across versions.",
    tags: ["Flutter", "React", "Spring Boot", "PostgreSQL", "Regression Testing"],
    category: "office",
    link: "https://exabyting.com/?case_study=aladin",
  },
  {
    id: 1,
    title: "CommChat Metaverse Messenger",
    date: "June 2022 - June 2024",
    description: "CommChat is a comprehensive communication platform that includes large meetings, calls, and encrypted chats. I led testing for the cross-platform Electron + TypeScript desktop app across macOS, Windows, and Linux, automating UI workflows with Selenium and PyAutoGUI to streamline regression cycles.",
    image: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/Projects/projectshow03.jpg",
    tags: ["Electron", "TypeScript", "macOS", "Windows", "Linux", "Selenium", "PyAutoGUI"],
    category: "office",
    link: "https://www.commchat.com/",
  },
  {
    id: 2,
    title: "Bangladesh NID Application System",
    date: "June 2020 - June 2022",
    description: "National ID system for the Bangladesh Election Commission. Tested voter report types (card, partner, dead/migrated/new voter, advanced search), validated bulk download/print across the BEC portal and NID2 desktop client, and verified AFIS fingerprint matching from .NET clients via handheld biometric devices. Mentored two QA interns.",
    image: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/Projects/projectshow04.jpg",
    tags: ["Verification", "AFIS Biometrics", "Oracle", "Redis", "Elasticsearch", "Kafka"],
    category: "office",
    link: "https://services.nidw.gov.bd/nid-pub/",
  },
  {
    id: 3,
    title: "Datahub for NTMC",
    date: "June 2020 - June 2022",
    description: "A centralized platform for the National Telecommunication Monitoring Center that consolidates citizen data (NID, passport, birth registration, mobile operators, NBR, driving license) into a unified viewer. Tested and optimized REST APIs integrating multiple government systems with Postman, and validated API usage limits and usage/log reporting.",
    image: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/Projects/projectshow05.png",
    tags: ["REST APIs", "Postman", "Data Integration", "Unified Viewer", "Usage Limits"],
    category: "office",
    link: "https://ntmc.gov.bd/",
  },
  {
    id: 5,
    title: "Script Utility Toolbox",
    date: "July 2022 - Present",
    description: "A collection of Bash, Python, Node.js, and JavaScript scripts built to automate repetitive QA and office tasks — desktop updates, time tracking, system maintenance, log analysis, and web/desktop automation. Streamlines workflows and improves team efficiency.",
    image: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/Projects/tigerit-office-automation-scripts.jpg",
    tags: ["Bash", "Python", "Selenium", "PyAutoGUI", "MQTT", "Desktop Automation", "Web Automation"],
    category: "personal",
    github: "https://github.com/nafiz-hossain/script-utility-toolbox",
  },
  {
    id: 4,
    title: "Portfolio",
    date: "Jan 2022 - Present",
    description: "This portfolio — built with React and Vite, styled as a quiet mono-editorial site — to showcase my QA work, automation projects, and experience as a Senior SQA Engineer.",
    image: "https://raw.githubusercontent.com/nafiz-hossain/portfolio/main/src/images/Projects/projectshow01.jpg",
    tags: ["React", "Vite", "styled-components", "JavaScript", "CSS"],
    category: "personal",
    github: "https://github.com/nafiz-hossain/portfolio",
    webapp: "https://nafiz-hossain.github.io/portfolio/",
  },
];

// export const TimeLineData = [
//   { year: 2017, text: "Started my journey" },
//   { year: 2018, text: "Worked as a freelance developer" },
//   { year: 2019, text: "Founded JavaScript Mastery" },
//   { year: 2020, text: "Shared my projects with the world" },
//   { year: 2021, text: "Started my own platform" },
// ];
