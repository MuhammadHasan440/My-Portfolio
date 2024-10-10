import React from 'react';
import Card from '../components/Card';




const Projects = () => {
    return (
        <div className="bg-black text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-orange-500">My Projects</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
               <Card src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NJyvrdIQCl8UY8kw-2kG1vCxseMPHKeAlA&s' title = 'MEri Gari'/>
            </div>
        </div>
    );
};

export default Projects;
