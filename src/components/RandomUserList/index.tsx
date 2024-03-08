import React from "react";
import UserCard from "./UserCard";
import { useAssessmentContext } from "../../context";
import { QueryUser } from "./queryUser";
import { IRandomUser } from "../../utils/types";
import Pagination from "../common/Pagination";

const RandomUserList = () => {
  const { state } = useAssessmentContext();
  const { randomUsers } = state;
  return (
    <div>
      <QueryUser />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-10 gap-y-0">
        {randomUsers.slice(0, 6)?.map((user: IRandomUser, i: number) => {
          return <UserCard user={user} key={i} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default RandomUserList;
