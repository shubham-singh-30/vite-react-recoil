import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  currentUserIDState,
  currentUserInfoQuery,
} from "../recoilStore/asyncAtom";
export const AsyncExample = () => {
  const currentUser = useRecoilValue(currentUserInfoQuery);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);
  return (
    <div>
      Async example,{currentUser.id} {currentUser.title}
      <button onClick={() => setCurrentUserID(currentUser.id + 1)}>
        {" "}
        get new user data
      </button>
    </div>
  );
};
