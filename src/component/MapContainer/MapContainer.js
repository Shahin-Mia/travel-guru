import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';



const MapContainer = props => {
    const mapStyles = {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
    const { placeName } = useParams();

    const hotelLocation = data[placeName];

    const displayMarkers = () => {
        return hotelLocation.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.lat,
                lng: store.long
            }}
            />
        })
    }

    return (
        <div className="map-container">
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: hotelLocation[1].lat,
                        lng: hotelLocation[1].long
                    }
                }
            >
                {displayMarkers()}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB-1YVaPFXxiGP6bvioeqDWB2ikkGh0TxE'
})(MapContainer);