// Personal Information
const PERSONAL_INFO = {
     name: "Tejashree B ",
    title: "Full Stack Developer",
    description: "My name is Tejashree B,I am a Computer Science Engineering graduate, currently working at Pole To Win as a Trainee Technical Representative. Passionate about development, I am enhancing my skills through a Full Stack Web Development course at Tap Academy",
    resumeLink: "./assets/B_Tejashree_Resume.pdf"
};

// Typing Effect Text
const TYPING_TEXTS = [
    "Web Developer",
    "Full Stack Developer", 
    "Front End Developer",
];

// Projects Data
const PROJECTS = [
    {
        id: 1,
        title: "My Portfolio website",
        description: "Built a responsive personal portfolio using HTML, CSS, and JavaScript. Showcases skills, education, certifications, and projects with a clean, interactive design.",
        image: "fas fa-briefcase", // Font Awesome icon as placeholder
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/TejashreeB27",
        featured: true
    },
    {
        id: 2,
        title: "Heart trail Animation",
        description: "Created a dynamic web animation that generates floating heart icons in response to mouse movements using HTML,CSS and Javascript.",
        image: "fa-solid fa-heart",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/TejashreeB27",
        featured: true
    },
    {
        id: 3,
        title: "stone Paper Scissor Game",
        description: "Developed a browser-based Interactive Stone Paper Scissor .The game allows users to play against the computer, with real-time scoring and a dynamic interface.",
        image: "far fa-hand-rock",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/TejashreeB27",
        featured: true
    },
     {
        id: 4,
        title: "Tic-tac-Toe Game",
        description: "Built a Tic Tac Toe game using React with turn-based gameplay and automatic winner detection. Implemented state management using React Hooks and added a reset option for continuous play.",
        image: "far fa-th",
        technologies: ["HTML", "CSS", "JavaScript","React JS"],
        githubLink: "https://github.com/TejashreeB27",
        featured: true
    },
     {
        id: 5,
        title: "Number Guessing Game",
        description: "Built a Number Guessing Game in Java with random number generation, user input handling, and feedback-based guessing logic, Included feedback responses such as “Too High” or “Too Low” to guide the player.",
        image: "far fa-question-circle",
        technologies: ["Java"],
        githubLink: "https://github.com/TejashreeB27",
        featured: true
    }
];

// Experience Data (Jobs + Education)
const EXPERIENCE = [
    {
        id: 1,
        type: "job", // job or education
        title: "Trainee Technical Representative",
        company: "pole to win",
        location: "Bangalore, India",
        duration: "Feb,2024 - present",
        description: "Managed customer inquiries through live chat and email, ensuring timely and accurate resolutions while maintaining a positive client experience. Demonstrated strong communication, active listening, analytical thinking, and problem-solving skills to identify and address issues effectively. Escalated complex cases to the higher support team when required and maintained clear documentation for continuity. Participated in regular team discussions and calls to share updates, collaborate on solutions, and improve overall support efficiency",
        current: true
    },
    {
        id: 3,
        type: "Certification",
        title: "Full stack Web Development",
        company: "Tap Academy",
        location: "Bangalore, India",
        current: true
    }
    // Add more experience entries here as needed
];

// Skills Data
const SKILLS = {
    backend: [
        {
            name: "Java",
            icon: "fab fa-java",
            level: 90
        },
        {
            name: "Python",
            icon: "fab fa-python",
            level: 80
        },
         {
            name: "API",
            icon: "fas fa-plug",
            level: 80
        },
        
        
        
    ],
    frontend: [
        {
            name: "HTML",
            icon: "fab fa-html5",
            level: 95
        },
        {
            name: "CSS",
            icon: "fab fa-css3-alt",
            level: 90
        },
        {
            name: "JavaScript",
            icon: "fab fa-js-square",
            level: 85
        },
        {
            name: "React JS",
            icon: "fab fa-react",
            level: 80
        },
        
    ],
    database:[
         {
            name: "MySQL",
            icon: "fas fa-database",
            level: 80
         },
         {
            name: "JDBC",
            icon: "fa-brands fa-database",
            level: 85
        },
        {
            name: "Spring",
            icon: "fas fa-leaf",
            level: 90
        },
       
    ],
    devOps: [
        {
            name: "Docker",
            icon: "fab fa-docker",
            level: 80
         },
         {
            name: "Kubernetes",
            icon: "fas fa-dharmachakra",
            level: 85
        },
        {
            name: "Agile & Scrum",
            icon: "fas fa-retweet",
            icon: "fas fa-users",
            level: 90
        },
        {
            name: "CI/CD",
            icon: "fas fa-sync-alt",
            level: 90
        },
    ],
    tools: [
        {
            name: "Git",
            icon: "fab fa-git-alt",
            level: 85
        },
         {
            name: "GitHub",
            icon: "fa-brands fa-github",
            level: 85
        },
        {
            name: "VS Code",
            icon: "fas fa-code",
            level: 90
        },
        {
            name: "Eclipse",
            icon: "fas fa-circle",
            level: 90
        }
    ]
};

// Contact Information
const CONTACT_INFO = {
    email: "tejashreeb56@gmail.com",
    phone: "7975278860",
    location: "I am open to both remote and on-site opportunities",
    socialLinks: [
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "http://linkedin.com/in/tejashree-b-136b972203",
            color: "#0077b5"
        },
        {
            name: "GitHub", 
            icon: "fab fa-github",
            url: "https://github.com/TejashreeB27",
            color: "#333"
        },
       
    ]
};

// Code Editor Content for Hero Section
const CODE_EDITOR_CONTENT = `const developer = {
    Name: "Tejashree B",
    Education: "B.E. in Computer Science Engineering (VTU, 2023)",
    Current Role: "Trainee Technical Representative at Pole To Win",
    Skills: "HTML, CSS, Javascript, React, Spring, JDBC, Hibernate, OOPs, Docker, Kubernetes, CI/CD, Java, Python, SQL, GitHub",
    Soft Skills: "Communication, Adaptability, Continuous Learning",
    Work Preference: "Open to both Remote (Work from Home) and On-site (Work from Office)",
    Goal: "To apply my skills to real-world projects, learn continuously, and contribute to impactful solutions."
};

console.log("Welcome to my portfolio!");`;

// Animation and UI Constants
const ANIMATION_CONFIG = {
    typingSpeed: 100, // milliseconds per character
    deletingSpeed: 50,
    pauseDuration: 2000, // pause between words
    loaderDuration: 2000, // loader display time
    codeTypingSpeed: 50 // milliseconds per character for code editor
};

// Export all constants (for ES6 modules if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PERSONAL_INFO,
        TYPING_TEXTS,
        PROJECTS,
        EXPERIENCE,
        SKILLS,
        CONTACT_INFO,
        ANIMATION_CONFIG
    };
}