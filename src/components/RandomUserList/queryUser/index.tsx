import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useAssessmentContext, actionTypes } from "../../../context";
import useHttp from "../../../utils/customHooks/useHttp";

export const QueryUser = () => {
  const { dispatch, state } = useAssessmentContext();
  const [query, setQuery] = useState(state.info.seed);
  const { getRandomUsers } = useHttp();

  const handleQuery = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const query = e.target.value;
    setQuery(e.target.value as string);
    dispatch({ type: actionTypes.SET_INFO, payload: { seed: query } });

    const options = { ...state.info };
    delete options.version;

    getRandomUsers(
      { ...options, seed: query },
      (res) => {
        dispatch({
          type: actionTypes.SET_RANDOM_USERS,
          payload: res.results,
        });
        dispatch({
          type: actionTypes.SET_INFO,
          payload: res.info,
        });
      },
      (err) => {
        console.log({ err });
      }
    );
  };
  return (
    <div className="bg-red w-[50%] m-auto mt-10 relative">
      <input
        className="w-full border-2 border-gray-400 outline-none border-b-2 border-r-2 border-dashed px-6 py-3 rounded-md"
        name="query"
        onChange={handleQuery}
        placeholder="Search Random User"
      />
      <div className="absolute top-[30%] right-3 text-gray-400 hover:text-gray-500 cursor-pointer text-2xl ">
        <IoSearchSharp />
      </div>
    </div>
  );
};
