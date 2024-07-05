import React from "react";
import "./HCard.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

function HCard({ from, hotels, setHotels, filteredHotels, setFilteredHotels }) {
  return (
    <div className="hcard__container">
      {filteredHotels &&
        filteredHotels.map((hotel, index) => (
          <div className="hcard" key={index}>
            <div className="hcard__background">
              {/* Background image for the card */}
            </div>
            <div className="hcard__info">
              <div className="row">
                <p>
                  City: <span>{hotel ? hotel.city : ""}</span>
                </p>
              </div>
              <div className="row">
                <p>
                  Hotel Name: <span>{hotel ? hotel.hotel_name : ""}</span>
                </p>
                <p>
                  Room Type: <span>{hotel ? hotel.room_type : ""}</span>
                </p>
              </div>
              <div className="row">
                <p>
                  Check In: <span>{hotel ? hotel.check_in : ""}</span>
                </p>
                <p>
                  Rating: <span>{hotel ? hotel.rating : ""}</span> <StarIcon />
                </p>
                <p>
                  Check Out: <span>{hotel ? hotel.check_out : ""}</span>
                </p>
              </div>
              <div className="row">
                <p>
                  Guests: <span>{hotel ? hotel.guests : ""}</span>{" "}
                </p>
                <p>
                  Price: <span>{hotel ? hotel.price_per_night : ""}</span>
                </p>
              </div>
              <div className="hcard__btn">
                <Link to="/book">Book</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default HCard;
