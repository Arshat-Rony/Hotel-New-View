import React from 'react';
import Feature from '../Feature/Feature';
import img1 from "../../../images/slider/1.jpg"
import img2 from "../../../images/slider/8.jpg"
import img3 from "../../../images/slider/9.jpg"
import "./Features.css"
const data = [
    { id: 1, heading: "Single room", price: "150$", img: img1 },
    { id: 2, heading: "Double suit", price: "250$", img: img2 },
    { id: 3, heading: "Delux room", price: "300$", img: img3 },
]

const Features = () => {
    return (
        <div className='features-container'>
            <div className='float mb-3'></div>
            <h2 className='fw-bold'>Choose a room </h2>
            <p className='px-4 text-black'>A portion of space within a building or other structure, separated by walls or partitions from other parts: a dining room. rooms, lodgings or quarters, as in a house or building. the persons present in a room: The whole room laughed.</p>
            <div className="features">
                {
                    data.map(room => <Feature
                        key={room.id}
                        room={room}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;