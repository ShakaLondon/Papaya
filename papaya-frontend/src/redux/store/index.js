import { createStore, applyMiddleware, compose } from "redux";
import initialState from "../initialState";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { reducers, persistedReducer } from "../reducers/index.js";

export const configureStore = createStore(
  persistedReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
