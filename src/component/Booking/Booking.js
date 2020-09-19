import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import '../Home/Home.css';
import { useHistory, useParams } from 'react-router-dom';
import { data } from '../../data';
import './Booking.css'


const Booking = () => {
    const { placeId } = useParams();
    const history = useHistory()

    const { places } = data;

    const place = places.find(place => place.id === parseInt(placeId));

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (form.checkValidity() === true) {
            history.replace(`/booking/hotel/${place.placeName}`)
        }
    }

    return (
        <div className="banner">
            <Navigation></Navigation>
            <Container style={{ marginTop: 100 }}>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1 style={{ fontSize: 80, }} >
                            {place.placeName}
                        </h1>
                        <p>{place.description}</p>
                    </Col>
                    <Col md={6}>
                        <div className="booking-form">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control required type="text" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control required type="text" />
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-between" controlId="formBasicPassword">
                                    <div>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control required type="date" />
                                    </div>
                                    <div>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control required type="date" />
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <button type="submit" className="booking-btn" style={{ width: "100%", outline: "none" }}>Start Booking</button>
                            </Form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;