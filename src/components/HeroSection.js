import React, { useState } from "react";
import mainimg from '../assets/images/mainimg.jpeg';
import './style/HeroSection.css';
import BookingForm from "./BookingForm";


const HeroSection =()=>{
const [isBookingOpen, setIsBookingOpen]=useState(false);

 const handleBookingOpen =()=>{
    setIsBookingOpen(!isBookingOpen)
 }

    return(
    <>
    <div className="container" >
        <div className="text-container">
        <h1 style={{color:"#2B5B08"}}>Vegeterian Restro</h1>
        <h2>Sydney</h2>
        <h3>Fresh,Flavorful and 100% Vegetarian</h3>
        <p>Experience the finest vegeterian dishes,crafted with love and the freshest ingredients.</p>
        <button className="reserve" onClick={handleBookingOpen}>Reserve your Table</button>
        </div>
        <div className="img">
            <img src={mainimg} alt="" />
        </div>
    </div>
    {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
    </>
    );

}

export default HeroSection;