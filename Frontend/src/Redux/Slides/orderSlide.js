import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    shippingAddress: {},
    itemsPrice: 0,
    totalPrice: 0,
    status: "pending",
    deliveredAt: "",
}

export const orderSlide = createSlice({
    name: "order",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log({ state, action });
        },
    }
})

export const { addProduct } = orderSlide.actions

export default orderSlide.reducer