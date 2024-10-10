import React from 'react';

const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'Responsive Design', level: 80 },
    { name: 'Version Control (Git)', level: 70 },
];

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen p-6">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-orange-500">About Me</h1>
            <p className="text-lg mb-4 leading-relaxed">
                Hello! I'm a Frontend Developer with expertise in HTML, CSS, JavaScript, React, and Next.js. 
                I enjoy building responsive and user-friendly web applications that deliver great user experiences.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
                With a keen eye for design and a passion for coding, I strive to create visually appealing and 
                functional web solutions. I am always eager to learn new technologies and improve my skills.
            </p>
            <h2 className="text-3xl font-bold text-orange-500 mt-6">Skills</h2>
            <div className="mt-4">
                {skills.map(skill => (
                    <div key={skill.name} className="mb-4">
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-64 h-2 bg-gray-700 rounded mr-2"> {/* Adjusted width */}
                                <div
                                    className={`h-2 bg-orange-500 rounded`}
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="text-lg font-semibold">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default About;
