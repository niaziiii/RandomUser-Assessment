import React from "react";
import { actionTypes, useAssessmentContext } from "../../context";
import { IRandomUser } from "../../utils/types";
import { IoIosCall, IoMdMail } from "react-icons/io";
import MapWithFlags from "../common/UserMap";
import { FaLongArrowAltLeft } from "react-icons/fa";

const UserProfile = () => {
  const { state, dispatch } = useAssessmentContext();
  const { activeUser } = state;
  const { name, picture, email, gender, phone, location } =
    activeUser as IRandomUser;
  const { latitude, longitude } = location.coordinates;

  const closeProfile = () => {
    dispatch({ type: actionTypes.SET_ACTIVE_USER, payload: null });
  };
  return (
    <div className="lg:min-h-screen  bg-gray-100 flex justify-center items-center ">
      <div className="lg:pt-[10vh] my-10 lg:my-0  w-[95%] lg:w-[85%] grid grid-cols-1 lg:grid-cols-4 lg:grid-flow-col lg:gap-10 border-gray-400 rounded-lg border-2 lg:border-none border-dashed ">
        <div className="bg-white relative h-fit py-8 col-span-1 flex justify-center items-center flex-col px-4  lg:border-2 border-dashed border-gray-400 lg:rounded-lg">
          <span
            onClick={closeProfile}
            className="absolute hover:bg-gray-200 text-xl cursor-pointer font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 border-gray-400  border-b-2 border-r-2 border-dashed  "
          >
            <FaLongArrowAltLeft />
          </span>
          <div className="w-full flex justify-center sm:justify-start sm:w-auto">
            <img
              className="object-cover w-20 flex justify-center items-center h-20 mt-3 mr-3 rounded-full"
              src={picture.large}
              alt={name.first}
            />
          </div>
          <p className="font-display mb-2 text-2xl font-semibold mt-2 text-center">
            {name.first} {name.last}
          </p>
          <div className="flex gap-2 w-full justify-center mt-4">
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
        <div className="lg:col-span-3 flex justify-center items-start h-[80vh] lg:border-2 border-dashed border-gray-400 rounded-lg ">
          <MapWithFlags locations={[+latitude, +longitude]} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
