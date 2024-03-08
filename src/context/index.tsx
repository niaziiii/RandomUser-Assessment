import React, { createContext, useContext, useReducer } from "react";
import { IInfo, IPaginations, IRandomUser } from "../utils/types";

type AssesmentState = {
  randomUsers: IRandomUser[] | [];
  users: IRandomUser[] | [];
  info: IInfo;
  pagination: IPaginations;
};

// Action types
export const actionTypes = {
  SET_RANDOM_USERS: "SET_RANDOM_USERS",
  SET_USERS: "SET_USERS",
  SET_INFO: "SET_INFO",
  SET_PAGINATION: "SET_PAGINATION",
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
    case actionTypes.SET_USERS:
      return { ...state, users: action.payload as IRandomUser[] };
    case actionTypes.SET_INFO:
      const payload = action.payload as IInfo;
      return { ...state, info: { ...state.info, ...payload } as IInfo };
    case actionTypes.SET_PAGINATION:
      const pagination = action.payload as IPaginations;
      return {
        ...state,
        pagination: { ...state.pagination, ...pagination } as IPaginations,
      };

    default:
      return state;
  }
};

const initialAssesmentState: AssesmentState = {
  randomUsers: [],
  users: [],
  info: {
    seed: "",
    results: 100,
    page: 1,
    version: "",
  },
  pagination: {
    first: 0,
    rows: 5, // no of showing result
    page: 0, // current page number
    total: 100,
    pageCount: 0,
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
