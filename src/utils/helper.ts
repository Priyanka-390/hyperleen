import { Facebook, Instagram, LinkedIn, TeamFacebook, TeamInstagram, TeamLinkdin, Twitter } from "@/components/common/Icons";
import { ReactElement } from 'react';

interface TeamSocialIcon {
  icon: () => ReactElement;
  link:string
}
interface TeamList{
  image: string,
  name: string,
  role: string,
  contact: string,
  mail: string,
  description: string
}
export const FAQ_LIST = [
    {
      title: "What is data labeling?",
      description:
        " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "Why is data labeling important?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "How does your data labeling service work?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "What types of data do you label?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "How do you ensure data quality?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "What sets your data labeling service apart?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
    {
      title: "How can I get started with your data labeling service?",
      description:
      " Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
    },
];
export const QUICK_LINK = [
  { name: "Home", path: "SERVICES" },
  { name: "About Us", path: "ABOUT_US" },
  { name: "Services", path: "FEATURE" },
  { name: "FAQ", path: "PLANS" },
  { name: "How it Works", path: "PLANS" },
];
export const SUPPORT_LINK = [
  { name: "Team", path: "HELP_CENTER" },
  { name: "Label", path: "TERMS_AND_CONDITIONS" },
];
export const POLICY_LINK = [
  { name: "Contact Us", path: "HELP_CENTER" },
  { name: "Privacy Policy", path: "TERMS_AND_CONDITIONS" },
  { name: "Terms and conditions", path: "TERMS_AND_CONDITIONS" },
];
 export const SOCIAL_ICONS  = [
  { icon: Facebook, link: "https://www.facebook.com" },
  { icon: Twitter, link: "https://www.instagram.com" },
  { icon: LinkedIn, link: "https://www.linkedin.com" },
  { icon: Instagram, link: "https://www.instagram.com/" },
];
  export const NAV_LIST = [
  {
    title: "Home",
    URL: "#",
  },
  {
    title: "Label",
    URL: "#label",
  },
  {
    title: "About Us",
    URL: "#about",
  },
  {
    title: "How It Works",
    URL: "#howitworks",
  },
  {
    title: "Team",
    URL: "#team",
  },
  {
    title: "FAQs",
    URL: "#faq",
  },
];
export const HEADER_BUTTONS = [
  {
    title:"Accurate"
  },
  {
    title:"Scalable"
  },
  {
    title:"Secure Data"
  },
    {
    title:"Labeling Solutions"
  },
      {
    title:"Quality Work"
  },

]
export const TEAM_SOCIAL_ICONS_LIST: TeamSocialIcon[]= [
  { icon: TeamLinkdin, link: "https://www.linkedin.com" },
  { icon: TeamFacebook, link: "https://www.facebook.com" },
  { icon: TeamInstagram, link: "https://www.instagram.com/" },
]
export const TEAM_DATA_LIST :TeamList[] = [
  {
    image: "/assets/images/webp/mark-butler.webp",
    name: "Mark Butler",
    role: "Lead Data Annotator",
    contact: "972.215.8214",
    mail: "darrin.araki@cbpacific.com",
    description:"Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified."
  },
   {
    image: "/assets/images/webp/corinne.webp",
    name: "Corinne Crabtree",
    role: "Lead Data Annotator",
    contact: "972.215.8214",
    mail: "darrin.araki@cbpacific.com",
    description:"Sarah Thompson brings over five years of experience in data labeling and annotation to our team. With a keen eye for detail and a passion for precision, Sarah leads our team of annotators, ensuring every piece of data is meticulously labeled and verified."
  },
]