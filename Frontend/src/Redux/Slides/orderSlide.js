import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    shippingAddress: {},
    itemName: "",
    main_image: "",
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
            const { orderItem, itemName, main_image } = action.payload
            const itemOrder = state?.orderItems.find((item) => item?.productDetails === orderItem.productDetails)
            if (itemOrder) {
                itemOrder.quantity += orderItem.quantity
            } else {
                state?.orderItems.push(orderItem)
            }
        },
        removeProduct: (state, action) => {
            const { productId } = action.payload
            return { ...state, orderItems: state?.orderItems?.filter((item) => item?.productDetails !== productId) };
        }
    }
})

export const { addProduct, removeProduct } = orderSlide.actions

export default orderSlide.reducer