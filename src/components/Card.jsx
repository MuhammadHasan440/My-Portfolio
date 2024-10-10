import React from 'react';

const Card = (props) => {
    return (
        <div  className="block p-6 bg-gray-800 rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500">
            <img src={props.src} alt={props.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-orange-500">{props.title}</h2>
            <p className="text-gray-400">{props.description}</p>
    
       </div>
    );
};

export default Card;
