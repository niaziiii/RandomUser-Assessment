import React from "react";
import { IRandomUser } from "../../../utils/types";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { useAssessmentContext, actionTypes } from "../../../context";

const UserCard = ({ user }: { user: IRandomUser }) => {
  const { name, picture, email, gender, phone } = user;
  const { dispatch } = useAssessmentContext();

  // setting user value for active user to display active user profile
  const showUserProfile = () => {
    dispatch({ type: actionTypes.SET_ACTIVE_USER, payload: user });
  };

  return (
    <div className="cursor-pointer" onClick={showUserProfile}>
      <div className="w-full flex items-center justify-center overflow-hidden ">
        <div className="relative w-full my-4 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-4 border-2 border-dashed border-gray-400 shadow-lg rounded-lg bg-white">
          <span className="absolute capitalize text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 border-gray-400  border-b-2 border-r-2 border-dashed  ">
            {gender}
          </span>

          <div className=" flex justify-center sm:justify-start sm:w-auto w-20 min-w-20">
            <img
              className="object-cover w-20 flex justify-center items-center h-20 mt-3 mr-3 rounded-full"
              src={picture.medium}
              alt={name.first}
            />
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-display mb-2 text-2xl font-semibold  ">
              {name.first} {name.last}
            </p>
            <div className="flex gap-2 w-full justify-center md:justify-start">
              <a
                href={`tel:${phone}`}
                className=" gap-2 h-10 w-10 flex items-center justify-center rounded-full text-lg bg-gray-200 hover:bg-gray-100"
              >
                <IoIosCall />
              </a>
              <a
                href={`mailto:${email}`}
                className=" gap-2 h-10 w-10 flex items-center justify-center rounded-full text-lg bg-gray-200 hover:bg-gray-100"
              >
                <IoMdMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
