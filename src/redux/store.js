import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { carsReducer } from "./cars/cars.slice";

// Конфигурация для Redux Persist
const persistConfig = {
  key: 'root',           // Ключ для идентификации в локальном хранилище
  storage,               // Используемый механизм хранения (например, localStorage)
};

// Создание персистентного редуктора для carsReducer
const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

// Создание Redux store с использованием configureStore
export const store = configureStore({
  reducer: {
    carsStore: persistedCarsReducer,  // Подключение персистентного редуктора к Redux store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создание персистентного объекта
export const persistor = persistStore(store);
