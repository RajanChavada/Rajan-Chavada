// Work.js
import React from 'react';
import "./css/work.css";
import WorkCard from "./WorkCard";
import rbc from "./images/rbc.jpeg"

export default function Work() {
    const cards = [
        { title: "RBC Capital Markets QTS Software Developer Intern (4 Months)", description: 'Spearheaded a internal Capital Market application called AVATAR, this application automates JIRA creation process for NexusIQ open source vulnerabilities, using HTML, JS fronend with Python Flask backend and SMSS Database I was able to create login/registration, JIRA AppCode management, and a daily script that creates tickets for teams increasing workflow by over 20%', image: rbc, hashtags: ["HTML", "JavaScript", "CSS", 'SQL', 'Python Flask', 'SMSS', 'JIRA', 'Database'], alternate: false},
        { title: "RBC Capital Markets QTS Software Developer Intern (4 Months)", description: 'Apart of the digital Channels web content team, I was responsible for handling client requests for internal and external RBC Capital Markets websites, these requests including updating pages, changing various components, and posting daily/weekly articles. I was also responsible for increasing performance of the main internal RBC Capital Markets home page.', image: rbc, hashtags: ["HTML", "XML", "XLST", "JavaScript", "CSS", "asp", "TeamSites", "JIRA"], alternate: true},
    ];

    return (
        <div className="shadow-2xl w-full max-w-10xl w3-container w3-center w3-animate-left w3-animate-opacity" style={{ opacity: 0.9, backgroundColor: '#254e58', padding: 200 }}>
            <h1 className='text-center header-work'>Work Experience</h1>
            {cards.map((card, index) => (
                <WorkCard key={index} title={card.title} description={card.description} image={card.image} hashtags={card.hashtags} alternate={card.alternate} />
            ))}
        </div>
    );
}
