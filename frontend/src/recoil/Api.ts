import { customAxios } from "./customAxios";

export const getDetailApi = async (contentId: number, location: number) =>
  await customAxios.get(`/api/location/${location}/${contentId}`, {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

// export const RestaurantDetailApi = async (contentId: number) =>
//   await customAxios.get(`/api/location/39/${contentId}`, {
//     headers: {
//       "Content-Type": "application/json;charset=UTF-8",
//     },
//   });
