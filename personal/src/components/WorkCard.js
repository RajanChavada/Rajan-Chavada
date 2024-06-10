import React from 'react';

export default function WorkCard({ title, description, image, hashtags, alternate }) {
    // Determine the position of the image based on alternate state
    const imagePosition = alternate ? "order-last md:order-last md:rounded-r-lg" : "md:rounded-l-lg";

    return (
        <div className="max-w-prose rounded overflow-hidden shadow-2xl m-5 mx-auto" style={{ backgroundColor: '#112d32', opacity: 0.9, borderRadius: 20 }}>
            <div className="flex flex-col md:flex-row">
                <div className={`w-48 h-96 md:h-auto md:w-48 md:overflow-hidden ${imagePosition}`}>
                    <img className="object-cover w-full h-full" src={image} alt="Work Image" />
                </div>
                <div className="flex-1 px-6 py-4">
                    <div className="font-bold text-xl mb-3" style={{ color: '#88bdbc', textAlign: "left" }}>{title}</div>
                    <p className="text-base" style={{ color: '#88bdbc', textAlign: "left" }}>{description}</p>
                    <div className="px-6 pt-4 pb-2">
                        {hashtags.map((hashtag, index) => (
                            <span key={index} className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{ backgroundColor: '#f9f8eb', color: '#112d32' }}>
                                {hashtag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
