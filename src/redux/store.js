import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { contactsApi } from "./contactsApi";
import contactsFilter from "./contactsFilter";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["contacts"],
// };

// const rootReducer = combineReducers({
//   contacts,
//   contactsFilter,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: ["persist/PERSIST"],
//     },
//   }),
// });

// export const persistor = persistStore(store);
