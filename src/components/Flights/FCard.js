import React from "react";
import "./FCard.css";
import { Link } from "react-router-dom";

function FCard({ filteredflights }) {
  return (
    <div className="card__container">
      {filteredflights &&
        filteredflights.map((flight, index) => (
          <div className="card" key={index}>
            <div className="card__background">
              {/* Background image for the card */}
            </div>
            <div className="card__info">
              <div className="row">
                <div>
                  Airline: <span>{flight.airlineName}</span>
                </div>
              </div>
              <div className="row">
                <p>
                  From: <span>{flight.from}</span>
                </p>
                <p>
                  Via: <span>{flight.via[0]}</span>
                </p>
                <p>
                  To: <span>{flight.to}</span>
                </p>
              </div>
              <div className="row">
                <p>
                  Departure:{" "}
                  <span>
                    {`${flight.departure.departureDate} ${flight.departure.departureTime}`}
                  </span>
                </p>
                <p>
                  Return:{" "}
                  <span>
                    {`${flight.return.returnDate} ${flight.return.returnTime}`}
                  </span>
                </p>
              </div>
              <div className="row">
                <p>
                  Duration: <span>{flight.duration}</span>
                </p>
                <p>
                  Price: <span>{flight.price}</span>
                </p>
              </div>
              <div className="card__btn">
                <Link to="/book">Book</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FCard;
