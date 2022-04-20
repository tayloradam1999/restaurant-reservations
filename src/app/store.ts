import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from '../features/reservationSlice';
import customersReducer from '../features/customerSlice';

// configure our Store with our reducers
export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer
  }
});

// exports for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;