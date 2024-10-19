// CorsInstructions.js
import React from 'react';

const CorsInstructions = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Welcome to Foodify!</h1>
            <p className="text-lg mb-4">To use this app, please download and add the CORS extension.</p>
            <a
                href="https://example.com/cors-extension-download"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Download CORS Extension
            </a>
        </div>
    );
};

export default CorsInstructions;
