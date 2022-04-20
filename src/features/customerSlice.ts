import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Customer has id, name, and food to be used in CustomerState
interface Customer {
  id: string;
  name: string;
  food: string[]
}

// CustomerState has a value that holds an array of Customer objects defined below
export interface CustomerState {
  value: Customer[]
}

// only food and id are neccessary for adding food to a customer
interface AddFoodToCustomerPayload {
  food: string;
  id: string;
}

// initialState for CustomerState
// <value> is an array of strings
const initialState: CustomerState = {
  value: []
}

// slice for customers
// uses intialState with value as empty array of Customer objects
// reducers: add and remove reservations
export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      // find customer with id
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          // add food to customer
          customer.food.push(action.payload.food);
        }
      });
    }
  }
})

// export actions to be used in components
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

// export reducer to be used in store.ts
export default customerSlice.reducer;