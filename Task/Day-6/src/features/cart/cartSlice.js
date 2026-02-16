import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
   name: "cart",
   initialState: {
     items:[
        {id: 1, name: "Laptop", quantity:1, price:1200},
        {id: 2, name: "Headphones", quantity:2, price:200}
    ],
    totalAmount: 1600
   },
   reducers: {
      addItem(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }

  state.totalAmount += action.payload.price;
},

removeItem(state, action) {
  const item = state.items.find((item) => item.id === action.payload.id);

  if (item) {
    state.totalAmount -= item.quantity * item.price;
  }

  state.items = state.items.filter(
    (item) => item.id !== action.payload.id
  );
},

increaseQuantity(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
    state.totalAmount += existingItem.price;
  }
},

decreaseQuantity(state, action) {
  const existingItem = state.items.find(
    (item) => item.id === action.payload.id
  );

  if (!existingItem) return;

  if (existingItem.quantity > 1) {
   existingItem.price = (existingItem.price/existingItem.quantity)
    existingItem.quantity -= 1;
   state.totalAmount -= (existingItem.quantity * existingItem.price)
  } else {
    state.items = state.items.filter(
      (item) => item.id !== action.payload.id
    );
    state.totalAmount -= existingItem.price;
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