import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slides/userSlide'
import counterReducer from './Slides/counterSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})