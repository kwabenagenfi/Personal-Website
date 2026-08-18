export type AnswerType = "text" | "table";

export type AnswerEntry = {
    id: string;
    question: string;
    type: AnswerType;
    answer: string;
    table?: {
        columns: string[];
        rows: string[][];
    };
}

export const answerBank: AnswerEntry[] = [
    {
        id: "favourite-languages",
        question: "What are Kobe's favourite programming languages?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Language", "Experience"],
            rows: [
                ["1", "Swift", "2 years"],
                ["2", "Python", "4 years"],
                ["3", "TypeScript", "2 years"],
                ["4", "Java", "1 year"],
                ["5", "Go", "1 year"],
            ],
        },
    },
    {
        id: "favourite-frameworks",
        question: "What are Kobe's favourite frameworks?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Framework", "Experience"],
            rows: [
                ["1", "React", "2 years"],
                ["2", "Next.js", "1 year"],
                ["3", "Django", "3 years"],
                ["4", "Flask", "2 years"],
                ["5", "Spring Boot", "1 year"],
            ],
        },
    },
    {
        id: "favourite-tools",
        question: "What are Kobe's favourite tools?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Tool", "Experience"],
            rows: [
                ["1", "Git", "3 years"],
                ["2", "Docker", "2 years"],
                ["3", "AWS", "1 year"],
            ],
        },
    },
    {
        id: "favourite-ide",
        question: "What is Kobe's favourite IDE?",
        type: "text",
        answer: "Visual Studio Code",
    },
    {
        id: "favourite-os",
        question: "What is Kobe's favourite operating system?",
        type: "text",
        answer: "macOS",
    },
    {
        id: "favourite-colour",
        question: "What is Kobe's favourite colour?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Colour"],
            rows: [
                ["1", "Blue"],
                ["2", "Green"],
                ["3", "Purple"],
                ["4", "Gold"],
                ["5", "Black"],
            ],
        },

    },
    {
        id: "favourite-food",
        question: "What is Kobe's favourite food?",
        type: "text",
        answer: "Sushi - especially shrimp tempura and california rolls. I also love a good bowl of ramen, particularly Genki ramen .",
    },
    {
        id: "favourite-movie",
        question: "What is Kobe's favourite movie?",
        type: "text",
        answer: "The Dark Knight and Gods of Egypt are my favourite movies. I  enjoy watching anything action, sci-fi or comedy fr.",
    },
    {
        id: "favourite-music",
        question: "What is Kobe's favourite music?",
        type: "text",
        answer: "I thought you'd never ask!!! I enjoy listening to a variety of music genres, but my favourites are Afrobeats, RnB, Hip Hop, pop , Worship and classical or orchestral. I also enjoy listening to Linkin Park and heavy on Adele she's my goat.",
    },
    {
        id: "favourite-sport",
        question: "What is Kobe's favourite sport?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Sport"],
            rows: [
                ["1", "Football"],
                ["2", "Soccer"],
                ["3", "Basketball"],
                ["4", "Tennis"],
                ["5", "Golf (its growing on me day by day) "],
            ],
        },
    },
    {
        id: "favourite-hobby",
        question: "What is Kobe's favourite hobby?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Hobby"],
            rows: [
                ["1", "Playing football"],
                ["2", "making beats sometimes songwriting"],
                ["3", "Coding and building apps"],
                ["4", "Traveling"],
                ["5", "cooking"],
            ],
        },
    },
    {
        id: "favourite-travel-destination",
        question: "What is Kobe's favourite travel destination?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Destination"],
            rows: [
                ["1", "Greece"],
                ["2", "Monaco"],
                ["3", "Tokyo"],
                ["4", "London"],
                ["5", "California"],
            ],
        },
    },
    {
        id: "favourite-animal",
        question: "What is Kobe's favourite animal?",
        type: "text",
        answer: "I love dogs, especially German Shepherds and Golden Retrievers.",
    },
    {
        id: "favourite-book",
        question: "What is Kobe's favourite book?",
        type: "text",
        answer: "Atomic Habits, Im not big on books but I do enjoy reading self-help and motivational books.",
    },
    {
        id: "background",
        question: "What is Kobe's background?",
        type: "text",
        answer: "Born in Brooklyn,raised in Queens New York, I moved to Ghana at a 10 and spent most of my formative years there. I later returned to the United States for higher education and have since been pursuing a career in software development.",
    },
    {
        id: "fun-fact",
        question: "What is a fun fact about Kobe?",
        type: "text",
        answer: "I can  playing 3 instruments the drums,the piano and guitar, currently learning the saxophone and would love to learn the violin when im done. I also have a keen interest in videography and love creating music video concepts.",
    },
    {
        id: "career-goal",
        question: "What is Kobe's career goal?",
        type: "text",
        answer: "I aspire to become a DevOps engineer and eventually transition into a Platform engineering role, also want to earn a PHD in machine learning some day.",
    },
    {
        id: "personal-goal",
        question: "What is Kobe's personal goal?",
        type: "text",
        answer: "Get rich and retire early, travel the world and make a positive impact in the lives of others through mentorship and philanthropy.",
    },
    {
        id: "home-town",
        question: "Where is Kobe's home town?",
        type: "text",
        answer: "Queens, New York, United States.",
    },
    {
        id: "current-location",
        question: "Where is Kobe currently located?",
        type: "text",
        answer: "I am currently based in the United States, Cincinnati to be exact.",
    },
    {
        id: "education",
        question: "What is Kobe's education background?",
        type: "text",
        answer: "I have a Bachelor's degree in Computer Science from the University of Cincinnati with a minor in Mathematics.",
    },
    {
        id: "work-experience",
        question: "What is Kobe's work experience?",
        type: "text",
        answer: "I have worked as a software developer intern at Fomena and previously done some contract jobs for various local businesses.",
    },
    {
        id: "languages-spoken",
        question: "What languages does Kobe speak?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Language"],
            rows: [
                ["1", "English"],
                ["2", "Twi"],
                ["3", "French"],
                ["4", "Pidgin English"],
                ["5", "Patois"],
            ],
        },
    },
    {
        id: "skills",
        question: "What are Kobe's skills?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Skill"],
            rows: [
                ["1", "Programming"],
                ["2", "Problem Solving"],
                ["3", "Communication - i used to suck at this but i've getting better"],
                ["4", "Teamwork"],
            ]
        },
    },
    {
        id: "technical-skills",
        question: "What are Kobe's technical skills?",
        type: "table",
        answer: "",
        table: {
            columns: ["Rank", "Skill"],
            rows: [
                ["1", "JavaScript"],
                ["2", "AWS"],
                ["3", "Python"],
                ["4", "React"],
                ["5", "Node.js"],
            ]
        },
    },
    {
        id: "fomena-project",
        question: "Tell me about the Fomena experience.",
        type: "text",
        answer: "i worked on the team that deployed the fomena auction app and more recently lead my team in building the AI search engine component for car searches in your local area, overall I contributed to the development of their web and mobile applications. I gained experience in full-stack development, working with technologies such as React, Node.js, and Firebase and AWS.",
    },
    {
        id: "backend-tech",
        question: "What backend technologies has Kobe used?",
        type: "text",
        answer: "Flask and MySQL as a core backend stack, with Firebase/Firestore added for parts of the data layer and Firebase Storage for image hosting.",
    },
    {
        id: "mobile-dev",
        question: "Has Kobe worked on mobile apps?",
        type: "text",
        answer: "Yes — FomenaPortal is a React Native app, including handling iOS ad hoc distribution (UDID registration, provisioning profiles, Diawi builds through Xcode) for internal testing.", // verify this is described accurately/completed
    },
    {
        id: "college-radio-project",
        question: "What is the College Radio project?",
        type: "text",
        answer: "A cross-platform playlist converter between Apple Music and Spotify, built in React Native and targeted at college students, informed by competitive research into apps like Airbuds/AirbudFM.",
    },
    {
        id: "star-debugging",
        question: "Tell me about a time you debugged a difficult issue.",
        type: "text",
        answer: "tracking down why images from Firebase Storage weren't displaying on FomenaPortal despite valid URLs in Firestore.",
    },
    {
        id: "why-swe",
        question: "Why does Kobe want to work in software engineering?",
        type: "text",
        answer: "I am passionate about creating solutions that make a difference in people's lives and I was quite addicted to my phone as a kid and I developed a strong interest in how apps work under the hood.",
    },


];