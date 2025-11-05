// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
// NOTE: cs_prep.JPG removed / missing; using placeholder until correct file is added.
import img from "./assets/work_logo/cs_prep.png";

import movierecLogo from './assets/work_logo/movie_rec.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "College of Engineering Roorkee (COER)",
    date: "2022 - 2026",
    desc: "I am pursuing my Bachelor’s degree in Computer Science and Engineering from COER. During my academic journey, I have studied a wide range of core subjects that have strengthened my understanding of computing and problem-solving. From Data Structures and Algorithms to Operating Systems, Computer Networks, and Database Management Systems, I have gained both theoretical knowledge and hands-on practical experience.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "L.R.D.S.V.M.B",
    date: "2022",
    grade: "78%",
    desc: "I completed my Class 12 education from L.R.D.S.V.M.B, Govardhan under the Uttar Pradesh State Board, with Physics, Chemistry, and Mathematics (PCM) along with Computer Science. This academic foundation strengthened my analytical thinking and problem-solving abilities, while Computer Science introduced me to programming concepts and logical reasoning skills",
    degree: "(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "L.R.D.S.V.M.B",
    date: "2020",
    grade: "87.5%",
    desc: "I completed my Class 10 education from L.R.D.S.V.M.B, Govardhan under the Uttar Pradesh State Board. This stage of my schooling helped me build a strong foundation in core subjects and improved my understanding, discipline, and study approach. It also encouraged consistency, curiosity, and logical thinking, which further supported my academic growth in higher studies.",
    degree: "(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "GitHub Profile ",
    description:
      "A clean and user-friendly web application developed using HTML, CSS, and JavaScript to explore detailed GitHub profile information. By simply entering a GitHub username, the app automatically fetches and displays comprehensive data such as profile overview, repositories, followers, following count, and contribution activity. The smooth and intuitive interface ensures a seamless browsing experience, making it a helpful tool for developers, learners, and recruiters to quickly understand a user’s GitHub presence.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/udaypratap01/udaypratap01",
    webapp: "https://melodious-semolina-76eb87.netlify.app/",
  },
  {
    id: 1,
    title: "face recognition attendance system",
    description:
      "A smart attendance system using facial recognition to automate tracking, prevent proxy attendance, and reduce manual errors—ideal for schools, offices, and organizations.",
    // image: img, // removed: missing asset
    image: img, // TEMP placeholder to fix build
    tags: ["Python", "OpenCV", "NumPy", "face_recognition", "MySQL"],
    github: "https://github.com/udaypratap01/face-recognition-attendance-system",
    webapp: "https://melodious-semolina-76eb87.netlify.app/",
  },
  {
    id: 2,
    title: "learn buddy 3D",
    description:
      "Learn Buddy 3D is an interactive learning application that explains concepts using 3D visual models and animations. Its intuitive design and smooth user experience make learning more engaging and enjoyable for students and curiosity-driven learners.",
    image: movierecLogo,
    tags: ["React.js" , "3D Model Rendering API", "nodeJS", "Three.js", "MongoDB"],
    github: "https://melodious-semolina-76eb87.netlify.app/",
    webapp: "https://melodious-semolina-76eb87.netlify.app/",
  },
];
