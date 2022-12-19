// configure store
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import authReducer from "./features/authSlice";
import notesReducer from "./features/notesSlice";
import todoReducer from "./features/todoSlice";
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
  auth: authReducer,
  notes: notesReducer,
  todo: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
