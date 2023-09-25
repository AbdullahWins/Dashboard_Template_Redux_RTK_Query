import { apiSlice } from "../api/apiSlice";

const girlFriendApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGirlFriends: builder.query({
      query: () => ({
        url: "/girlfriends/all",
      }),
      // providesTags: ["girlfriendsaa", "girlfriends"],
    }),
    addGirlFriend: builder.mutation({
      query: (data) => ({
        url: "/girlfriends/add",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["girlfriends"],

      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(
              girlFriendApi.util.updateQueryData(
                "getAllGirlFriends",
                undefined,
                (draft) => {
                  const validData = result?.data;
                  draft?.push(validData);
                }
              )
            );
          }
        } catch (error) {
          console.log(error?.message);
        }
      },
    }),
    updateGirlFriend: builder.mutation({
      query: ({ id, data }) => ({
        url: `/girlfriends/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data) {
            dispatch(
              girlFriendApi.util.updateQueryData(
                "getAllGirlFriends",
                undefined,
                (draft) => {
                  const index = draft.findIndex((item) => item._id === id);
                  if (index !== -1) {
                    draft[index] = { ...draft[index], ...result?.data };
                  }
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deleteGirlFriend: builder.mutation({
      query: (id) => ({
        url: `/girlfriends/delete/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data?.deletedCount === 1) {
            dispatch(
              girlFriendApi.util.updateQueryData(
                "getAllGirlFriends",
                undefined,
                (draft) => {
                  const filteredArray = draft.filter(
                    (item) => item?._id !== id
                  );
                  return filteredArray;
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetAllGirlFriendsQuery,
  useAddGirlFriendMutation,
  useUpdateGirlFriendMutation,
  useDeleteGirlFriendMutation,
} = girlFriendApi;
