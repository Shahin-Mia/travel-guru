import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { data } from '../../data';
import HotelCard from '../HotelCard/HotelCard';
import Navigation from '../Navigation/Navigation';
import MapContainer from '../MapContainer/MapContainer';
import { useParams } from 'react-router-dom';

const Hotel = () => {
    const { hotels } = data;
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    const { placeName } = useParams();

    return (
        <Container>
            <Navigation></Navigation>
            <hr />
            <Row className="p-4">
                <Col md={6}>
                    <h3>Stay in {placeName}</h3>
                    {
                        hotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel}></HotelCard>)
                    }
                </Col>
                <Col md={6}>
                    <MapContainer></MapContainer>
                </Col>
            </Row>
        </Container>
    );
};


export default Hotel;