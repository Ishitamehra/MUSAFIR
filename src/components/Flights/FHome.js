import React, { useState, useEffect } from "react";
import "./fhome.css";

function FHome({ from, setfrom, to, setTo, flightsProps, setFilteredFlights }) {
  const [flights, setFlights] = useState([]);
  const [flightOption, setFlightOption] = useState([]);
  const [departureDate, setDepartureDate] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      setFlightOption(data);
      setFlights(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...flightsProps];
    let result = data.filter((data) => data.from === from && data.to === to);
    setFilteredFlights(result);
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  // Filter unique cities for 'From' and 'To' dropdowns
  const uniqueFromCities = [
    ...new Set(flightOption.map((option) => option.from)),
  ];
  const uniqueToCities = [...new Set(flightOption.map((option) => option.to))];

  return (
    <div className="home__container">
      <div className="home">
        <p>Book International and Domestic Flights</p>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="from home__input">
              <p>FROM</p>
              <select onChange={handleFromChange} value={from}>
                <option value="">Select City</option>
                {uniqueFromCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="to home__input">
              <p>TO</p>
              <select onChange={handleToChange} value={to}>
                <option value="">Select City</option>
                {uniqueToCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="departure home__input">
              <p>DEPARTURE DATE</p>
              <input
                type="date"
                value={departureDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div>
            <button className="home__search" type="submit">
              SEARCH
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FHome;
