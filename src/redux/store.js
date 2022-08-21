import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootReducer, contactsApi } from "./contactsApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);
