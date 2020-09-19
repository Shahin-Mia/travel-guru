import React from 'react';
import { Card } from 'react-bootstrap';
import './Places.css'

const Places = (props) => {
    const { id, placeName } = props.property;
    return (
        <a className="custom-card" href={`/booking/${id}`}>
            <Card style={{ width: '18rem', borderRadius: 21, border: 'none' }}>
                <Card.Img src={props.property.picture} />
                <h2 style={{ position: 'absolute', left: "30px", bottom: "20px", fontSize: '36px' }}>
                    {placeName}
                </h2>
            </Card>
        </a>
    );
};

export default Places;