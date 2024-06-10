import React from 'react';
import './css/projects.css';
import Card from "./Card";

export default function Projects() {
    const cards = [
        { title: "Report Reducer", description: 'Leveraging OpenAI API, I created a React.js web application that takes in Financial Reports from companies. When investors need to make fundemental analysis, sifting through these reports takes way too long, so my web application summarizes the key points from the report!', hashtags: ['React.js', 'OpenAI', 'REST API', 'Python Flask', 'JavaScript'], link: 'https://github.com/RajanChavada/ReportReducer' },
        { title: "Backend Integrated Login/Regristration", description: 'Using a React.js frontend for visuals and interactions, alongside a Python Flask backend with MySQL database and a RESTful API service, I was successfully able to load and store multiple user login and registration data to mimic popular website regristation pages.', hashtags: ['Python Flask', 'React.js','MySQL', 'SQL', 'REST API'], link: 'https://github.com/RajanChavada/Login-System-'},
        { title: "Machine Learning FIFA World Cup Predictor", description: 'Accurately predicted the outcome of the FIFA world cup using Google Clouds Vertex AI model. Cleaning and using data from Kaggle with a Flask backend, we were able to send and receive data to our Frontend built with React.js in order to display our predictions in a kindly manner', hashtags: ['Google Cloud', 'React.js', 'Python Flask', 'REST API'], link:'https://github.com/RajanChavada/Mirai-9' },
        { title: "Customer Churn Prediction", description: 'Using various Python Data Science and Machine Learning libraries, I was able to predict customer churn from telecom companies. Customer churn determines how likley a customer is to stay with a service given specific data', hashtags: ['Machine Learning', 'Python', 'Data Science', 'Pandas', 'NumPy', 'SkLearn'], link: 'https://github.com/RajanChavada/Churn-Prediction' },
        { title: "ASL Sign Language Detector", description: 'Using computer vision technologies, me and my team created a model that can detect and interepret sign language from a camera. Using data from Kaggle with various hand signs we were able to create a model and train with Media Pipe and Tensor Flow neural networks', hashtags: ['Media Pipe', 'Tensor Flow', 'OpenCV', 'Computer Vision', 'Python'], link:'https://github.com/RajanChavada/asl-translator'}
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
