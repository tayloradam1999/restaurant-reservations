import React, { KeyboardEvent, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {

  // setup our state
  const [reservationNameInput, setReservationNameInput] = useState("");

  // configure useSelector to pull the reservations and customers from the store
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value);

  // configure useDispatch to dispatch actions to the store
  const dispatch = useDispatch();

  // configure our addReservation action creator
  const handleAddReservations = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  // if user presses enter while interacting with our input,
  // dispatch the addReservation action
  const _handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddReservations();
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {/* map over our reservations and render a ReservationCard for each */}
              {reservations.map((reservation, index) => (
                <ReservationCard name={reservation} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            {/* render a text input and a button to add a reservation */}
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
              onKeyDown={_handleKeyEnter}
            />
            {/* onClick of the button, dispatch the addReservation action */}
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {/* map over our customers and render a CustomerCard for each */}
          {customers.map((customer, index) => (
            <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;