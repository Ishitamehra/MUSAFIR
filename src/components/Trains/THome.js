import React, { useState, useEffect } from "react";
import "./thome.css";

function THome({
  from,
  setfrom,
  to,
  setTo,
  depart,
  setDepart,
  TrainProps,
  setFilteredTrains,
}) {
  const [trains, setTrains] = useState([]);
  const [trainOption, setTrainOption] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      setTrainOption(data);
      setTrains(data);
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
    let data = [...TrainProps];
    let result = data.filter((data) => data.from === from && data.to === to);
    setFilteredTrains(result);
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
    // console.log(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  // Filter unique cities for 'From' and 'To' dropdowns
  const uniqueFromCities = Array.from(
    new Set(trainOption.map((train) => train.from))
  );
  const uniqueToCities = Array.from(
    new Set(trainOption.map((train) => train.to))
  );

  return (
    <div className="home__container">
      <div className="home">
        <p>Book International and Domestic Flights</p>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="from home__input">
              <p>FROM</p>
              <select onChange={handleFromChange} defaultValue="2">
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
              <select onChange={handleToChange} defaultValue="2">
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
              <input type="date" />
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

export default THome;
