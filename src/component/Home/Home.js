import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import Places from '../Places/Places';
import { faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../data';




const Home = () => {
    const { places } = data;

    const [property, setProperty] = useState(places[0])


    const nextProperty = () => {
        const newProperty = property.index + 1;
        setProperty(places[newProperty])
    }
    const prevProperty = () => {
        const newProperty = property.index - 1;
        setProperty(places[newProperty])
    }

    return (

        <div className="banner">
            <Navigation></Navigation>
            <Container fluid style={{ marginTop: 100 }}>
                <Row className="justify-content-center">
                    <Col md={1}></Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: 80 }}>
                            {property.placeName}
                        </h1>
                        <p>{property.description}</p>
                        <a href={`/booking/${property.id}`} className="booking-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></a>
                    </Col>
                    <Col md={7} className="overflow-hidden">
                        <div className={`card-slider active-card-${property.index}`}>
                            <div className="card-wrapper" style={{
                                transform: `translateX(-${property.index * (431 / places.length)}%)`
                            }}>
                                {
                                    places.map(card => <Places key={card.id} property={card}></Places>)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <button className="custom-btn" disabled={property.index === 0} onClick={prevProperty}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button className="custom-btn" disabled={property.index === places.length - 1} onClick={nextProperty}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            </Container>
        </div>

    );
};

export default Home;