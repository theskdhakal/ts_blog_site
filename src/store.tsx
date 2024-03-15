import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/login-register/userSlice";
import contentReducer from "./pages/home/contentSlice";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const userPersistConfig = {
  key: "userInfo",
  storage,
  whitelist: ["user"],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    userInfo: persistedUserReducer,
    contentInfo: contentReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
