import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import EmployeeReducer from "../features/employeeHome/store/reducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
});

// Store instance
let store = null;

//Persist config
let persistor = null;
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["employee"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Create the Redux store
 */
export const configureStore = () => {
  store = createStore(persistedReducer);
  const dispatch = (...args) => store.dispatch(...args);
  persistor = persistStore(store);
  return { store, persistor, dispatch };
};

/**
 * Get store
 */
export const getStore = () => store;

/**
 * Get persistor
 */
export const getPersistor = () => persistor;

/**
 * Dispatch an action
 */
export const dispatch = (...args) => store.dispatch(...args);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dispatch,
  getStore,
  configureStore,
  persistor,
};
