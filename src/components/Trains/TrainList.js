import React, { useEffect, useState } from "react";
import "./TrainList.css";
import TCard from "./TCard";
import "./thome.css";
import THome from "./THome";

function TrainList() {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");

  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredTrains(data);
        setTrains(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <THome
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        TrainProps={trains}
        setFilteredTrains={setFilteredTrains}
      />
      <div className="flight__container">
        <div className="flight">
          <h3>Available Tickets</h3>
          <div className="flight__cards">
            <TCard
              from={from}
              to={to}
              depart={depart}
              trains={trains}
              setTrains={setTrains}
              filteredTrains={filteredTrains}
              setFilteredTrains={setFilteredTrains}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainList;
