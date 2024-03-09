import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useAssessmentContext, actionTypes } from "../../../context";
import Dropdown from "../DropDown";
import { IOptions } from "../../../utils/types";

export const QueryUser = () => {
  const { dispatch, state } = useAssessmentContext();
  const [query, setQuery] = useState(state.query);

  const handleQuery = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value as string);
    dispatch({ type: actionTypes.SET_QUERY, payload: e.target.value });

    const query: string = `${e.target.value}`.toLowerCase();
    const allUsers = [...state.randomUsers];

    if (!query) {
      dispatch({ type: actionTypes.SET_USERS, payload: allUsers });
    }

    const filteredUser = allUsers.filter((user) => {
      const { first, last } = user.name;
      const userName = `${first} ${last}`.toLowerCase();
      return userName.includes(query as string);
    });

    dispatch({ type: actionTypes.SET_USERS, payload: filteredUser });
  };

  const handleGenderFilter = (value) => {
    dispatch({ type: actionTypes.SET_GENDER, payload: value });

    const allUsers = [...state.randomUsers];

    if (!value) {
      return dispatch({ type: actionTypes.SET_USERS, payload: allUsers });
    }

    const filteredUser = allUsers.filter((user) => {
      const { gender } = user;
      const _gender = `${gender}`.toLowerCase();

      return _gender == value.name.toLowerCase();
    });

    dispatch({ type: actionTypes.SET_USERS, payload: filteredUser });
  };
  return (
    <div className="bg-red w-[90%] md:w-[70%] lg:w-[50%] m-auto mt-10 relative h-full flex flex-col-reverse sm:flex-row gap-4">
      <Dropdown
        selected={state.gender as IOptions}
        option={[
          { code: "Male", name: "Male" },
          { code: "Female", name: "Female" },
        ]}
        handleChange={handleGenderFilter}
      />
      <div className="w-full relative">
        <input
          className="w-full border-2 border-gray-400 outline-none border-dashed px-6 py-3 rounded-md"
          name="query"
          value={query}
          onChange={handleQuery}
          placeholder="Search Random User"
        />
        <div className="absolute top-[30%] right-3 text-gray-400 hover:text-gray-500 cursor-pointer text-2xl ">
          <IoSearchSharp />
        </div>
      </div>
    </div>
  );
};
