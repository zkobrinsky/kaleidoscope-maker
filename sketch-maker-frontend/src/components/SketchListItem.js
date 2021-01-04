import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap'

export default function SketchListItem ({sketch}) {

    return (
        <div id={sketch.id} className="grid-item">
            <Link to={`sketches/${sketch.id}`}>
                <Col >
                <img src={sketch.image_thumbnail} alt={sketch.title} className="thumbnail"/>
                </Col>
            </Link>
            <p>{sketch.title}</p>
        </div>
    )

}







