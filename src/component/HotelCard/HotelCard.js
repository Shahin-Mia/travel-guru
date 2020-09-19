import React from 'react';
import './HotelCard.css'

const HotelCard = (props) => {
    const { picture, name, price, rating, ratingPic } = props.hotel;
    return (
        <div className="card mb-3 my-card" style={{ maxWidth: 540 }}>
            <div className="row no-gutters align-items-center">
                <div className="col-md-6">
                    <img src={picture} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title"> <a href="#">{name}</a> </h5>
                        <p className="card-text">4 guests   2 bedrooms   2 beds   2 baths</p>
                        <p className="card-text">Wifi Air conditioning Kitchen</p>
                        <p className="card-text">
                            <span>
                                <img className="star-pic" src={ratingPic} alt="star" />
                            </span>
                            <span>{rating}</span>
                            <span className="pricing-tag">${price}/night</span>
                        </p>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default HotelCard;