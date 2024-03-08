import React from "react";
import UserCard from "../common/UserCard";
import { useAssessmentContext } from "../../context";
import { QueryUser } from "../common/queryUser";
import { IRandomUser } from "../../utils/types";
import Pagination from "../common/Pagination";

const RandomUserList = () => {
  const { state } = useAssessmentContext();
  const { pagination } = state;
  const { first, rows } = pagination;
  const { users } = state;
  const slicedUsers = users.slice(first, first + rows);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-[10vh] w-[95%] lg:w-[85%] m-auto">
        <h1 className="text-center text-4xl capitalize font-semibold">
          Assesment test
        </h1>
        <div>
          <QueryUser />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-x-10 gap-y-0">
            {slicedUsers.length > 0 ? (
              slicedUsers?.map((user: IRandomUser, i: number) => {
                return <UserCard user={user} key={i} />;
              })
            ) : (
              <div className="text-center w-full  col-span-4">
                {" "}
                No user found!
              </div>
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default RandomUserList;
