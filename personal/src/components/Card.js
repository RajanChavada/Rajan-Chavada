import React from 'react';

export default function Card({ items }) {
    const { title, description, hashtags } = items;

    return (
        <div className="card" style={{ backgroundColor: '#112d32', color: '#88bdbc', opacity: 0.9, borderRadius: 20 }}>
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-5">{title}</div>
                <p className="text-lg">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {hashtags.map((hashtag, index) => (
                    <span key={index} className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{ backgroundColor: '#4f4a41', color: '#88bdbc' }}>
                        #{hashtag}
                    </span>
                ))}
            </div>
        </div>
    );
}
