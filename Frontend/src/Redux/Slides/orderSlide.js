import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    shippingAddress: {},
    createdAt: "",
    itemsPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    status: "pending",
    paidAt: "",
    deliveredAt: "",
}

export const orderSlide = createSlice({
    name: "order",
    initialState,
    reducers: {

    }
})

export const {  } = orderSlide.actions

export default orderSlide.reducer