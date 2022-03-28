import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import Reactotron from "../config/reactotron";
import { persistStore, persistReducer } from "redux-persist";
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
