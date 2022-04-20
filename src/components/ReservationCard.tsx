import React from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
  // configure useDispatch to dispatch actions to the store
  const dispatch = useDispatch();

  return (
    // renders the card with onClick to dispatch the removeReservation action
    // and then add it to customers
    <div className="reservation-card-container" onClick={() => {
      dispatch(removeReservation(index));
      dispatch(addCustomer({
        id: uuid(),
        name,
        food: []
      }));
    }}>{name}</div>
  )
}
