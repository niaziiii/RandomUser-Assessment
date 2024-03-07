import React, { createContext, useContext, useReducer } from "react";
import { IInfo, IRandomUser } from "../utils/types";

type AssesmentState = {
  randomUsers: IRandomUser[] | [];
  info: IInfo;
};

// Action types
export const actionTypes = {
  SET_RANDOM_USERS: "SET_RANDOM_USERS",
  SET_INFO: "SET_INFO",
} as const;

export type Action = {
  type: keyof typeof actionTypes;
  payload?: unknown;
};

const contextReducer = (
  state: AssesmentState,
  action: Action
): AssesmentState => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_USERS:
      return { ...state, randomUsers: action.payload as IRandomUser[] };

    case actionTypes.SET_INFO:
      return { ...state, info: action.payload as IInfo };

    default:
      return state;
  }
};

const initialAssesmentState: AssesmentState = {
  randomUsers: [],
  info: {
    seed: "",
    results: 0,
    page: 1,
    version: "",
  },
};

export const AssessmentContext = createContext<
  { state: AssesmentState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const AssessmentContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<AssesmentState, Action>>(
    contextReducer,
    initialAssesmentState
  );

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAssessmentContext = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error(
      "useAssessmentContext must be used within a ContextProvider"
    );
  }
  return context;
};
