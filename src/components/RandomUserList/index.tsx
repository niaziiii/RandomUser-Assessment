import React from "react";
import RandomUser from "./randomUser";
import { useAssessmentContext } from "../../context";

const RandomUserList = () => {
  const { state, dispatch } = useAssessmentContext();
  console.log({ stateABC: state });

  return (
    <div>
      <RandomUser />
    </div>
  );
};

export default RandomUserList;
