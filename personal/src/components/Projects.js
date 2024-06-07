import React from 'react';
import './css/projects.css';
import Card from "./Card";

export default function Projects() {
    const cards = [
        { title: "Project 1", description: 'Hello World', hashtags: ['Hello World', 'Hello People'] },
        { title: "Project 2", description: 'Hello World', hashtags: ['Hello World', 'Hello People'] },
        { title: "Project 3", description: 'Hello World', hashtags: ['Hello World', 'Hello People'] },
        { title: "Project 4", description: 'Hello World', hashtags: ['Hello World', 'Hello People'] },
        { title: "Project 5", description: 'Hello World', hashtags: ['Hello World', 'Hello People'] }
    ];

    return (
        <div className="shadow-2xl w-full max-w-10xl w3-container w3-center w3-animate-left w3-animate-opacity" style={{ opacity: 0.9, backgroundColor: '#88bdbc', padding: 200 }}>
            <h1 className='text-center header-proj'>Projects</h1>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <Card key={index} items={card} />
                ))}
            </div>
        </div>
    );
}
