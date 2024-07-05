import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import FlightList from "./components/Flights/FlightList";
import HotelList from "./components/Hotels/HotelList";
import TrainList from "./components/Trains/TrainList";
import Register from "./components/auth/Register";
import Book from "./components/Book/Book";
import DataApp from "./components/DataApp";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr_Hs2SCCmHK4qKC663NfG1dnSznuPbow",
  authDomain: "travel-website-data-a1c3a.firebaseapp.com",
  projectId: "travel-website-data-a1c3a",
  storageBucket: "travel-website-data-a1c3a.appspot.com",
  messagingSenderId: "413840259722",
  appId: "1:413840259722:web:30c4b50bec97ce69908b73",
  measurementId: "G-8CP7QSG5SJ",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

function App() {
  // State to manage user authentication status
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up an authentication state listener
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [firebaseAuth]);

  return (
    <Router>
      <DataApp>
        <div className="App">
          <Navbar user={user} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FlightList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/flight"
              element={
                <>
                  <FlightList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/hotel"
              element={
                <>
                  <HotelList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/train"
              element={
                <>
                  <TrainList />
                  <Footer />
                </>
              }
            />
            <Route
              path="/book"
              element={
                <PrivateRoute user={user}>
                  <Book />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </DataApp>
    </Router>
  );
}

export default App;
