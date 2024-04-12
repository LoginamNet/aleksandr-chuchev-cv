import { Metadata } from "next";

import ProjectsTitle from "../components/projects-title/projects-title";
import ProjectsCards from "../components/projects-cards/projects-cards";
import CVContacts from "../components/cv-contacts/cv-contacts";

export const metadata: Metadata = {
  title: "Aleksandr Chuchev | Works",
  description:
    "Take a look at some of my work using different technologies and approaches.",
  openGraph: {
    title: "Aleksandr Chuchev | Works",
    description:
      "Take a look at some of my work using different technologies and approaches.",
    url: "https://aleksandr-chuchev.netlify.app/projects",
    images: [
      {
        url: "https://github.com/LoginamNet/CV/blob/develop/public/page-previews/projects-preview.webp",
        secureUrl:
          "https://github.com/LoginamNet/CV/blob/develop/public/page-previews/projects-preview.webp",
        width: 1450,
        height: 710,
        alt: "Превью для сайта https://aleksandr-chuchev.netlify.app",
      },
    ],
  },
};

function Projects() {
  return (
    <>
      <ProjectsTitle />
      <ProjectsCards />
      <CVContacts />
    </>
  );
}

export default Projects;
