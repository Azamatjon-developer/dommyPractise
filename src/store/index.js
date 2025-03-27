import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import authSlice from "./slice/authSlice.js";
import storage from "redux-persist/lib/storage"; // LocalStorage uchun
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Persist config yaratamiz
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // faqat 'auth' slice'ni saqlaymiz
};

// Root reducer yaratamiz
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: persistReducer(persistConfig, authSlice),
});

// Store yaratamiz
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

// Persist store'ni eksport qilamiz
export const persistor = persistStore(store);
