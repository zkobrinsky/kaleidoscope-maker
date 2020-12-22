import React from 'react';
import { Link } from 'react-router-dom';

export default function SketchListItem ({sketch}) {

    return (
        <div id={sketch.id}>
            <Link to={`sketches/${sketch.id}`}>
                <img src={sketch.image_url} alt={sketch.title} className="thumbnail"/>
            </Link>
            <p>{sketch.title}</p>
        </div>
    )

}







