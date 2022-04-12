import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ 
    name: 'cart',
    initialState: { 
        cartItems: [],
        total: 0,
        showCart: false 
    },
    reducers: { 
        addToCart(state, action) { 
            const newItem = action.payload;
            const itemIndex = state.cartItems.find(item => item.id === newItem.id);
            if(itemIndex)  { 
                itemIndex.quantity++;
                itemIndex.total += newItem.price;
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    total: newItem.price,
                    name: newItem.name
                });

                state.total++;
            }
        },
        setShowCart(state) { 
            state.showCart = !state.showCart;
        },
        removeFromCart(state, action) {
            state.changed = true;
            const id = action.payload;

            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
                state.total--;
            } else {
                existingItem.quantity--;
                existingItem.total -= existingItem.price;
            }
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;