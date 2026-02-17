import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
   name: "cart",
   initialState: {
     items:[
        {id: 1, name: "Laptop", quantity:1, price:1200},
        {id: 2, name: "Headphones", quantity:1, price:200}
    ],
    totalAmount: 1400
   },
   reducers: {
      addItem(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
    state.totalAmount += existingItem.price;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
    state.totalAmount += action.payload.price;
  }
},

removeItem(state, action) {
  const item = state.items.find((item) => item.id === action.payload.id);
    state.items = state.items.filter(
    (item) => item.id !== action.payload.id);
    state.totalAmount -= (action.payload.price * action.payload.quantity);
},

increaseQuantity(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
    state.totalAmount += action.payload.price;
  }
},

decreaseQuantity(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (!existingItem) return;

  if (existingItem.quantity > 1) {
    existingItem.quantity -= 1;
    state.totalAmount -= existingItem.price;
  } else {
    state.items = state.items.filter(
      (item) => item.id !== action.payload.id
    );
    state.totalAmount -= state.payload.price;
  }
},

clearCart(state) {
  state.items = [];
  state.totalAmount = 0;
}

   }
})

export const {addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;