import React, { useEffect, useState } from 'react'
import "./HotelList.css"
import HCard from './HCard'
import HHome from "./HHome"


function HotelList() {

  const [from, setfrom] = useState("");

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredHotels(data);
        setHotels(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <HHome
        from={from}
        setfrom={setfrom}
        HotelsProps={hotels}
        setFilteredHotels={setFilteredHotels}
      />

      <div className='flight__container'>
        <div className='flight'>
          <h3>Available Tickets</h3>
          <div className='flight__cards'>
            <HCard
              from={from}
              hotels={hotels}
              setHotels={setHotels}
              filteredHotels={filteredHotels}
              setFilteredHotels={setFilteredHotels} />
          </div>
        </div>

      </div>
    </>
  )
}

export default HotelList