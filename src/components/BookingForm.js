import React, { useState } from 'react';
import './style/BookingForm.css';

const BookingForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
  });

  const [errors, setErrors] = useState({});
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.date) formErrors.date = 'Date is required';
    if (!formData.guests) formErrors.guests = 'Number of guests is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
        setIsBookingSuccess(true);
        setTimeout(() => {
          setIsBookingSuccess(false);
          setFormData({
            name: '',
            email: '',
            date: '',
            guests: '',
          });
          onClose(); // Call the onClose function passed as a prop to close the form
        }, 2000); // Message shown for 2 seconds before hiding
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="booking-form">
      {isBookingSuccess ? (
        <div className="success-message">
          <h3>Table booked successfully!</h3>
        </div>
      ) : (
        <>
          <h2>Book a Table</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name" // Add autoComplete attribute
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email" // Add autoComplete attribute
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                autoComplete="bday" // Add autoComplete for date
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="guests">Guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                autoComplete="off" // Prevent autoComplete for guest count
              />
              {errors.guests && <p className="error">{errors.guests}</p>}
            </div>

            <button type="submit">Book Now</button>
          </form>
        </>
      )}
    </div>
  );
};

export default BookingForm;