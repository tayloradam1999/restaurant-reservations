import React, { useState, KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardType) {

  // configure useDispatch to dispatch actions to the store
  const dispatch = useDispatch();

  // setup our state
  const [customerFood, setCustomerFood] = useState("");

  // if user presses enter while interacting with our input,
  // dispatch the addFoodToCustomer action
  const _handleKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") dispatch(addFoodToCustomer({
      id,
      food: customerFood
    }));
  }

  const handleAddFood = () => {
    if (!customerFood) return
    dispatch(addFoodToCustomer({
      id,
      food: customerFood
    }));
    setCustomerFood("");
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => (
            <p key={index}>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input 
            value={customerFood}
            onChange={(e) => {
              setCustomerFood(e.target.value);
            }}
            onKeyDown={_handleKeyEnter}
            // when user submits, clear the input
          />
          <button onClick={handleAddFood}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export { }