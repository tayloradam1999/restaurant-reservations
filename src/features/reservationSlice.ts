import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface for ReservationState to give the type of the state. (TS requires this)
interface ReservationState {
  value: string[]
}

// initialState for ReservationState
// <value> is an array of strings
const initialState: ReservationState = {
  value: []
}

// slice for reservations
// uses intialState with value as empty array of strings
// reducers: add and remove reservations
export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      // uses index of reservation to remove with splice
      state.value.splice(action.payload, 1);
    }
  }
})

// export actions to be used in components
export const { addReservation, removeReservation } = reservationSlice.actions;

// export reducer to be used in store.ts
export default reservationSlice.reducer;