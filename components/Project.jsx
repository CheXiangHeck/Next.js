import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
    const projectData = [
        {
            id: 1,
            title: "HTML",
            description: "This is my HTML project during my first year semester 2. It is built with pure HTML, CSS, Javascript. No additional library, JQuery or PHP",
            image: "/projects/HTML.gif",
            gitUrl: "https://drive.google.com/drive/folders/1U3EzTrrgM1cKGNCK4ASwVyyNTs0677vT?usp=sharing",
            status: "Completed"
        },
        {
            id: 2,
            title: "WordPress",
            description: "This is what I have learnt recently.",
            image: "/projects/WordPress.png",
            gitUrl: "https://learnexp5.wordpress.com/",
            status: "Undergoing"
        },
        {
            id: 3,
            title: "PHP",
            description: "This is my assignment for year 2 semester 2. It is built with PHP, CSS, HTML, JQuery, and Javascript.",
            image: "/projects/PHP.png",
            gitUrl: "https://drive.google.com/drive/folders/1BkjmAvCV0Sz_VEhsX8Im2MrVQwEWQ_Zs?usp=sharing",
            status: "Completed"
        },
        {
            id: 4,
            title: "Java",
            description: "This is my year 2 semester 1. To be honest, this project is a mess so I am trying to fix it up. There are lack of team communication which I am trying to improve as a team leader.",
            image: "",
            gitUrl: "",
            status: "Undergoing"
        }, {
            id: 5,
            title: "Data Struture",
            description: "Same as Java, it was a mess. Still unable to have a good team play yet, too focusing on individual work.",
            image: "",
            gitUrl: "",
            status: "Undergoing"
        }, {
            id: 6,
            title: "Java",
            description: "This project is still underprogress",
            image: "/projects/JavaProject.png",
            gitUrl: "https://drive.google.com/drive/folders/1Y-J983YfxxYNQ6EDfUNq-YMrDlzLYAXW?usp=sharing",
            status: "Undergoing"
        },
    ];

    return (
        <div>
            <div className="text-4xl font-semiboldd mb-8 pt-10">My Project</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        status={project.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
