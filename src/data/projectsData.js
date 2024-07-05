import eight from '../assets/svg/projects/eight.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import Nile from '../assets/jpg/Nile.jpg'
import MMUMovies from '../assets/jpg/MMUMovies.jpg'
import API from '../assets/png/API.png'
import ulms from '../assets/jpg/ulms.jpg'
import GPT3 from '../assets/jpg/GPT3.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Nile',
        projectDesc: 'The Nile project, modeled after platforms like eBay, involved developing both the front end and back end using an Agile Framework and Scrum methodology, and hosting it on AWS. Our dedicated team collaborated seamlessly to implement Spring Security with token-based authentication, ensuring a secure and efficient user experience.',
        tags: ['Java', 'React', 'TypeScript', 'Spring Boot', 'Spring Security', 'PostgreSQL'],
        code: 'https://github.com/240408-JavaReactAWS/project-two',
        demo: 'http://revshop-2024.s3-website.us-east-2.amazonaws.com/',
        image: Nile
    },
    {
        id: 2,
        projectName: 'ULMS',
        projectDesc: 'The Unified Learning Management System (ULMS) is a robust educational platform designed to enhance the learning journey within academic institutions. It encompasses both frontend and backend components, leveraging modern technologies to provide an efficient and secure environment for students, teachers, and administrators.',
        tags: ['Java', 'React', 'TypeScript', 'Spring Boot', 'PostgreSQL'],
        code: 'https://github.com/240408-JavaReactAWS/ULMS-Group6',
        demo: '',
        image: ulms
    },
    {
        id: 3,
        projectName: 'MMU Movies',
        projectDesc: 'MMU Movies is an engaging Netflix-like platform, providing a captivating cinematic experience through its appealing design, secure login system via Firebase Auth, and access to the latest blockbusters with TMDb API integration.',
        tags: ['React', 'Firebase', 'API\'s'],
        code: 'https://github.com/MamoonUddin/Mamoon-NetflixClone',
        demo: 'https://mmu-movies.netlify.app/',
        image: MMUMovies
    },
    {
        id: 4,
        projectName: 'Item Management API',
        projectDesc: 'The Item Management API Project focuses on building a robust item management API using Spring Boot, Spring Web, and Spring Data, facilitating CRUD operations for item management. All interactions are handled via HTTP, with proper utilization of status codes and HTTP verbs for efficient communication between the client and server.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data', 'Spring Web'],
        code: 'https://github.com/240408-JavaReactAWS/PairedProject_Jonathan-Muhammad',
        demo: '',
        image: API
    },
    {
        id: 5,
        projectName: 'Social Media Blog API',
        projectDesc: 'The Social Media Blog API Project focuses on building a comprehensive social media backend using Spring Boot, Spring Web, and Spring Data, facilitating CRUD operations for user and message management. All interactions are handled via HTTP, with proper utilization of status codes and HTTP verbs for efficient communication between the client and server.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data'],
        code: '',
        demo: '',
        image: API
    },
    {
        id: 6,
        projectName: 'ChatGPT3 Intro',
        projectDesc: 'Discover the magic of ChatGPT with the engaging ChatGPT3 Intro project—a user-friendly React App that offers insights into AI dialogue and its potential applications.',
        tags: ['React', 'CSS'],
        code: 'https://github.com/MamoonUddin/ChatGPT3Intro',
        demo: 'https://mamoon-gpt3-intro.netlify.app/',
        image: GPT3
    },
    {
        id: 7,
        projectName: "PyInterp",
        projectDesc: 'A collaborative project integrating Python and C++ strengths on Linux to create a streamlined interpreter.',
        tags: ['Python', 'C++', 'Linux'],
        code: "https://github.com/MamoonUddin/PyInterp_PersonalCopy",
        demo: '',
        image: ''
    },
    {
        id: 8,
        projectName: 'Predicting Patient Survival',
        projectDesc: 'Discover the potential of data-driven healthcare decisions as innovative data analysis yields accurate medical prognosis.',
        tags: ['Python' , 'Tensorflow', "Pytorch"],
        code: '',
        demo: '',
        image: ''
    },{
        id: 9,
        projectName: 'Medical-DB',
        projectDesc: 'Experience streamlined healthcare data management that enables targeted interventions and efficient visualization of patient demographics.',
        tags: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"],
        code: '"https://github.com/cosc3380-t15/medical-db-t15"',
        demo: '',
        image: ''
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/