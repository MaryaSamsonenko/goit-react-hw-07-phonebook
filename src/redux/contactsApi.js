import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62fd3a2f6e617f88dea72172.mockapi.io/api/",
  }),
  tagTypes: [{ type: "Contacts" }],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contact", id })),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),

    addContact: builder.mutation({
      query: (body) => ({
        url: `contacts`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Contact", id }],
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
