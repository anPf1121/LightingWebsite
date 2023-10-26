import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slides/userSlide'
import counterReducer from './Slides/counterSlide'
import orderReducer from './Slides/orderSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    order: orderReducer,
  },
})