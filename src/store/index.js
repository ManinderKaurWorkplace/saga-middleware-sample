import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import EmployeeReducer from "../features/employeeHome/store/reducer";
import EmployeeSagas from "../features/employeeHome/store/saga";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
});

//Root saga function to listen all actions
function* rootSaga() {
  yield all([EmployeeSagas()]);
}

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

//To create saga middleware
export const sagaMiddleware = createSagaMiddleware();

/**
 * Create the Redux store
 */
export const configureStore = () => {
  store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const dispatch = (...args) => store.dispatch(...args);
  persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
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
