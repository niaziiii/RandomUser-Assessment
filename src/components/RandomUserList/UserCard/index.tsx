import React from "react";
import { IRandomUser } from "../../../utils/types";
import { IoMdMail, IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

const UserCard = ({ user }: { user: IRandomUser }) => {
  const { name, picture, email, gender, phone } = user;

  return (
    <div>
      <div className="w-full flex items-center justify-center ">
        <div className="relative w-full my-4 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-4 border-2 border-dashed border-gray-400 shadow-lg rounded-lg bg-white">
          <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 border-gray-400  border-b-2 border-r-2 border-dashed  ">
            {gender}
          </span>

          <div className="w-full flex justify-center sm:justify-start sm:w-auto">
            <img
              className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
              src={picture.medium}
              alt={name.first}
            />
          </div>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p className="font-display mb-2 text-2xl font-semibold  ">
              {name.first} {name.last}
            </p>
            <div className="flex gap-[1px] gap-2">
              <a href={`tel:${phone}`} className="flex items-center gap-2">
                <IoIosCall />
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2">
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
