import React, { useState } from "react";
import "./Reservation.css"; // Create a CSS file to style the section.

function MetroReservation() {
  const [reservationDetails, setReservationDetails] = useState({
    train: "",
    date: "",
    passengers: 1,
  });

  const [successMessage, setSuccessMessage] = useState("");

  // List of available metro trains (static for now; can be fetched dynamically)
  const metroTrains = ["Red Line", "Blue Line", "Green Line", "Yellow Line"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({ ...reservationDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { train, date, passengers } = reservationDetails;

    if (!train || !date || passengers < 1) {
      alert("Please fill out all fields correctly!");
      return;
    }

    // Save reservation (for now, just show success message)
    setSuccessMessage(
      `Reservation successful! Train: ${train}, Date: ${date}, Passengers: ${passengers}`
    );

    // Clear form
    setReservationDetails({
      train: "",
      date: "",
      passengers: 1,
    });
  };

  return (
    <div className="reservation-section">
      <h1>Metro Train Reservation</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        {/* Select Train */}
        <div className="form-group">
          <label htmlFor="train">Select Train:</label>
          <select
            id="train"
            name="train"
            value={reservationDetails.train}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select a Train --</option>
            {metroTrains.map((train, index) => (
              <option key={index} value={train}>
                {train}
              </option>
            ))}
          </select>
        </div>

        {/* Select Date */}
        <div className="form-group">
          <label htmlFor="date">Travel Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={reservationDetails.date}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Number of Passengers */}
        <div className="form-group">
          <label htmlFor="passengers">Number of Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            value={reservationDetails.passengers}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
}

export default MetroReservation;
