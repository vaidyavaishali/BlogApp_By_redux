import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import RegisterReducer from '../slice/registerSlice';
import homeDataReducer from '../../redux/slice/homeDataSlice';
import LoginReducer from '../../redux/slice/loginSlice';
import AddNewReducer from "../slice/addblogSlice"
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    register: RegisterReducer,
    login: LoginReducer,
    homedata: homeDataReducer,
    newblog: AddNewReducer
  },
  middleware: [thunk]
});

export default store;