import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartRedux'
import bookReducer from './bookRedux'
import categoryReducer from './categoryRedux'
import singlebookReducer from './singleBookRedux'
import authorReducer from './authorRedux'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,

} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    book: bookReducer,
    singlebook: singlebookReducer,
    category: categoryReducer,
    cart: cartReducer,
    author: authorReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
    reducer: persistedReducer,
    // reducer:{
    //     cart: cartReducer,
    //     user: persistedReducer,
    // },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),

});

export let persistor = persistStore(store);
