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
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `contacts/${id}`,
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
