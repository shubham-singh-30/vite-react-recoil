import { atom, selector, selectorFamily, useRecoilState } from "recoil";
import axios from "axios";
export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

export const userInfoQuery = selectorFamily({
  key: "UserInfoQuery",
  get: (userID) => async () => {
    const response = await  axios(
        `https://jsonplaceholder.typicode.com/todos/${userID}`
      );;
    if (response.error) {
      throw response.error;
    }
    return response.data;
  },
});

export const currentUserInfoQuery = selector({
  key: "CurrentUserInfoQuery",
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

// export  const friendsInfoQuery = selector({
//   key: "FriendsInfoQuery",
//   get: ({ get }) => {
//     const { friendList } = get(currentUserInfoQuery);
//     return friendList.map((friendID) => get(userInfoQuery(friendID)));
//   },
// });

// export const currentUserNameQuery = selector({
//   key: "CurrentUserName",
//   get: async ({ get }) => {
//     const response = await axios(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log("🚀 ~ file: atomFile.js:52 ~ get: ~ response:", response);
//     return response.data;
//   },
// });
// export const currentUserNameQueryById = selectorFamily({
//   key: "CurrentUserName",
//   get:
//     (userID) =>
//     async ({ get }) => {
//       const response = await axios(
//         `https://jsonplaceholder.typicode.com/todos/${userID}`
//       );
//       console.log("🚀 ~ file: atomFile.js:52 ~ get: ~ response:", response);
//       return response.data;
//     },
// });
