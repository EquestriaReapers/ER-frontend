import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "core/auth/store/auth-slice";
import loaderReducer from "core/auth/store/loader-slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedReducer, loader: loaderReducer },
});

export const persistor = persistStore(store);

export default store;
