import React from 'react';

export default function SketchListItem ({sketch}) {

    return (
        <div id={sketch.id}>
            <img src={sketch.image_url} alt={sketch.title} className="photo"/>
            <p>{sketch.title}</p>
        </div>
    )

}







