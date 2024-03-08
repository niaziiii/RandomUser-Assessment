import React, { createContext, useContext, useReducer } from "react";
import { IInfo, IPaginations, IRandomUser } from "../utils/types";

type AssesmentState = {
  randomUsers: IRandomUser[] | [];
  users: IRandomUser[] | [];
  activeUser: IRandomUser | null;
  info: IInfo;
  pagination: IPaginations;
  query: string;
};

// Action types
export const actionTypes = {
  SET_RANDOM_USERS: "SET_RANDOM_USERS",
  SET_USERS: "SET_USERS",
  SET_INFO: "SET_INFO",
  SET_PAGINATION: "SET_PAGINATION",
  SET_QUERY: "SET_QUERY",
  SET_ACTIVE_USER: "SET_ACTIVE_USER",
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
    case actionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload as string,
      };

    case actionTypes.SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload as IRandomUser,
      };

    default:
      return state;
  }
};

const initialAssesmentState: AssesmentState = {
  randomUsers: [],
  users: [],
  activeUser: null,
  info: {
    seed: "",
    results: 100,
    page: 1,
    version: "",
  },
  pagination: {
    first: 0,
    rows: 8, // No of showing result
    page: 0, // Current page number
    total: 100,
    pageCount: 0,
  },
  query: "",
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
