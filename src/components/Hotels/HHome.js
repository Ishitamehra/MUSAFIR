import React, { useState, useEffect } from "react";
import "./Hhome.css";

function HHome({ from, setfrom, HotelsProps, setFilteredHotels }) {
  const [hotels, setHotels] = useState([]);
  const [hotelOption, setHotelOption] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
      );
      const data = await response.json();
      setHotelOption(data);
      setHotels(data);
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
    let data = [...HotelsProps];
    let result = data.filter((data) => data.city === from);
    setFilteredHotels(result);
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
  };

  // Filter unique cities
  const uniqueCities = Array.from(
    new Set(hotelOption.map((hotel) => hotel.city))
  );

  return (
    <div className="home__container">
      <div className="home">
        <p>Book International and Domestic Flights</p>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="from home__input">
              <p>CITY</p>
              <select defaultValue="1" onChange={handleFromChange}>
                <option value="">Select City</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="departure home__input">
              <p>CHECK-IN</p>
              <input type="date" />
            </div>
            <div className="return home__input">
              <p>CHECK-OUT</p>
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

export default HHome;
