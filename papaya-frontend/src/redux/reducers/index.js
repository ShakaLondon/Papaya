import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import appReducer from "./appReducer";
import authReducer from "./authReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

export const reducers = combineReducers({
  appState: appReducer,
  user: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
}

export const persistedReducer = persistReducer(persistConfig, reducers)

