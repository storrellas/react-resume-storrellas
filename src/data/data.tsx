import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import meImage from '../images/me.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sergi Torrellas - Full-stack developer',
  description: "Sergi Torrellas - Full-stack developer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Sergi Torrellas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Barcelona based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        helping build a modern, mobile-first, domain registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Sergi counts on more than 15 years experience in the software industry with a multidisciplinary 
        profile <strong className="text-stone-100">ranging from technical development to acting as product owner</strong>. 
        He enjoys being in 
        high-technology environments to develop cutting-edge technologies, learning new paradigms and 
        providing valuable solutions. Additionally, Sergi has an extensive expertise in planning, estimating, 
        risk/issue management, resource/budget follow-up and controlling activities to meet project requirements. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me reading Tintin comic books,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Pyrinees</strong>.        
      </p>
      {/* <img src={meImage.src} width="200"></img> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: meImage,
  description: `Sergi counts on more than 15 years experience in the software industry 
    with a multidisciplinary profile ranging from technical development to acting as product owner. He enjoys being in high-technology environments to develop cutting-edge technologies, learning new paradigms and providing valuable solutions. Additionally, Sergi has an extensive expertise in planning, estimating, risk/issue management, resource/budget 
    follow-up and controlling activities to meet project requirements.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, Spain', Icon: MapIcon},
    {label: 'Star sign', text: 'Geminis', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Music, Trekking, Drawing', Icon: SparklesIcon},
    {label: 'Study', text: 'Computer Science', Icon: AcademicCapIcon},
    {label: 'Favorite food', text: 'Risotto', Icon: ArchiveBoxIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'French',
        level: 8,
      },
      {
        name: 'Italian',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend frameworks',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'Vue',
        level: 4,
      },
      {
        name: 'JQuery',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend framework',
    skills: [
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'NestJS',
        level: 7,
      },
      {
        name: 'Django',
        level: 10,
      },
      {
        name: 'SpringBoot',
        level: 6,
      },
    ],
  },
  {
    name: 'Development Languages',
    skills: [
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C/C++',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2011',
    location: 'Universitat Oberta de Catalunya, Barcelona, Spain',
    title: 'MEng in Open Source',
    content: <p>Sofware Engineering, System administration, Project Management, Quality assurance, Bussiness models
    Adapted to European Higher Education Area (EHEA) requirements</p>,
  },
  {
    date: 'September 2007',
    location: 'UPC - ETSETB TelecomBCN',
    title: 'MEng Electronic Engineering',
    content: <p>Analog and digital electronics (specialty in Embedded Systems), Power Supply, Semiconductors, Microelectronics</p>,
  },
  {
    date: 'September 2005',
    location: 'UPC - ETSETB TelecomBCN',
    title: 'MEng Electrical Engineering',
    content: <p>Signal processing, Radio Frequency, Telematics, OS architecture, Radiocommunications</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2021 - Present',
    location: 'Nestle Global Services',
    title: 'Technology Expert',
    content: (
      <p>
        Nestle Digital Services Hub was created in 2016 with the aim  of promoting the digital transformation of the company. It aims at designing, shaping and implementing company’s strategy to maintain the digital platforms Nestlé uses to interact with consumers bringing new user experiences.
      </p>
    ),
  },
  {
    date: 'March 2018 - April 2021',
    location: 'Sopra Steria Consulting',
    title: 'Lead Solution Architect',
    content: (
      <p>
        Sopra's DigitalFactory is a team of passionate engineers providing omnichannel end-to-end solutions for our customers (Nestlé, Caixabank, Allianz). Our mission is to make the digital interaction as simple and elegant as possible basing our collective and daily in a spirit of "start-up", intrapreneurship and engineering
      </p>
    ),
  },
  {
    date: 'April 2016 - February 2018',
    location: 'Whisbi',
    title: 'Team Lead',
    content: (
      <p>
        Whisbi offers real-time video lead management technology for retail that enables online businesses to engage and enhance the e-commerce experience. As such, companies can automatically ‘teleport’ their online visitors to stores or showrooms so as to showcase physical products to web.       
      </p>
    ),
  },
  {
    date: 'April 2013 - March 2016',
    location: 'Neuroelectrics',
    title: 'Senior SW engineer',
    content: (
      <p>
        Start-up company developing high quality biomedical devices with emphasis on usability, accuracy and reliability. 
      </p>
    ),
  },
  {
    date: 'September 2009 - April 2013',
    location: 'Barcelona Digital Technology Center',
    title: 'Team Lead - AIL Health',
    content: (
      <p>
        Leading and coordination of the Active Independent Living (AIL) research team. AIL is to explore ICT-based solutions for dependent people with different types of impairment, functional or cognitive, so as to enhance their autonomy, dignity and integration.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'David Ibánez',
      text: 'I had the pleasure of working with Sergi for three years at Starlab, collaborating on several project teams. During this time, he demostrated a very deep knowledge in software development at different levels as well as true teamwork skills. The combination of interpersonal skills with a broad technology vision enables Sergi to grasp others perspective being able to get everyone to be on the same track. This rare mix of productivity and personal skills makes him to be a key people on any team, no matter where he falls on the organisation chart.',
      image: 'https://media.licdn.com/dms/image/C4D03AQF3zf449cG1pA/profile-displayphoto-shrink_100_100/0/1614165385841?e=1697068800&v=beta&t=HVGCT2Jysvi3w4NmMmBtbaiCvhd6VPrN-C4Ud-yTFEg',
    },
    {
      name: 'Felip Miralles',
      text: 'Sergi has been a key collaborator in my team and one of the most committed people I have had the luck to work with. His technological skills are excellent, hi creativity and proactiveness oustanding, and his special capability to face and solve all kind of problems is a hard to find asset in the marketplace. He has excellent team work, communication and business oriented comptetences. Sergis potential is enormous, and if it comes out, Id like to work with him again.',
      image: 'https://media.licdn.com/dms/image/C5603AQFuPy39TZQSsQ/profile-displayphoto-shrink_100_100/0/1516346141303?e=1697068800&v=beta&t=Vukn_CbhRmFy2hP3FT53yHkl00r8joRCU9qSu5B9lsc',
    },
    {
      name: 'Yanitsa Kazantseva',
      text: 'The cooperation with Sergi was a great experience as usual. This time he exceeded by far our expectations. Everything went smoothly, on time and within the planed budget. Well be working on another upcoming project with him soon. Also our clients are thrilled with the results we??ve achieved together with Sergi.',
      image: 'https://media.licdn.com/dms/image/C5603AQHxgBlDCii8hQ/profile-displayphoto-shrink_200_200/0/1535647782187?e=1697068800&v=beta&t=nmzZLzQni5sYs9AW2jkOLI_EzJWb7XajcdfeaKnE0oQ',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'storrellas at gmail com',
      href: 'mailto:storrellas@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://www.google.com/maps/place/@41.409654,2.1539794,15z?entry=ttu',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'storrellas',
      href: 'https://github.com/storrellas',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/storrellas'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22381195/sergi-torrellas'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/storrellas/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/storrellas'},
];
