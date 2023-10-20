import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  nodejs,
  git,
  docker,
  STIGE,
  IDS,
  carrent,
  jobit,
  tripguide,
  AWS,
  Azure,
  IAM,
  Apache,
  Terraform,
  Firewalls,
  Virtualization,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "Solution Architect",
    icon: backend,
  },
  {
    title: "Cyber Security",
    icon: creator,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Azure",
    icon: Azure,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "IAM",
    icon: IAM,
  },
  {
    name: "Apache",
    icon: Apache,
  },
  {
    name: "Terraform",
    icon: Terraform,
  },
  {
    name: "Firewalls",
    icon: Firewalls,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Virtualization",
    icon: Virtualization,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "IDS",
    icon: IDS,
    iconBg: "#383E56",
    date: "April 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Maintaining and improving the performance of existing software's.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "STIGE",
    icon: STIGE,
    iconBg: "#E6DEDD",
    date: "December 2021 - March 2022",
    points: [
      "Taking hands on practice with HTML, CSS and Javascript.",
      "Co-ordaining with team leader for extensive updates.",
      "Collaborating with designers to develop code for their designs and bring them to life in a seamless manner.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Testimonials are always welcome. If you have any questions, feel free to reach out to me",
    name: "Name",
    designation: "CEO",
    company: "Company",
    image: "",
  },
  {
    testimonial:
      "Testimonials are always welcome. If you have any questions, feel free to reach out to me",
    name: "Name",
    designation: "CEO",
    company: "Company",
    image: "",
  },
  {
    testimonial:
      "Testimonials are always welcome. If you have any questions, feel free to reach out to me",
    name: "Name",
    designation: "CEO",
    company: "Company",
    image: "",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
