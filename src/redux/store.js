// configure store
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

// import async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
