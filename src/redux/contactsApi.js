import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62fd3a2f6e617f88dea72172.mockapi.io/api/:",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: `contacts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from "@reduxjs/toolkit";

// export const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [],
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     removeContact(state, action) {
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//   },
// });

// // Selectors
// export const contactsSelector = (state) => state.contacts;

// //Actions
// export const { addContact, removeContact } = contactsSlice.actions;

// // Reducers
// export default contactsSlice.reducer;
