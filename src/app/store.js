// store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // default: localStorage if web
import basketReducer from "../slices/basketSlice";
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, basketReducer)

const store = configureStore({
  reducer: {
    basket: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export { store };

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, 
      ...action.payload
    }
    return nextState
  } else {
    return persistedReducer(state, action)
  }
}

const initStore = () => {
  return configureStore({
    reducer: {
      basket: reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  });
}

export const wrapper = createWrapper(initStore);
