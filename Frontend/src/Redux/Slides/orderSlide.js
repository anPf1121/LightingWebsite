import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems: [],
    shippingAddress: {},
    itemName: "",
    main_image: "",
    product_type: "",
    unit_price: 0,
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
        },
        changeQuantity: (state, action) => {
            const { quantity, productId } = action.payload
            const itemOrder = state?.orderItems.find((item) => item?.productDetails === productId)
            if(itemOrder) {
                itemOrder.quantity = quantity
            }
        }
    }
})

export const { addProduct, removeProduct, changeQuantity } = orderSlide.actions

export default orderSlide.reducer