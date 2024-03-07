import { useEffect, useState } from "react";
import { useAssessmentContext, actionTypes } from "../../context";
import useHttp from "./useHttp";

const useInitApp = () => {
  const { dispatch } = useAssessmentContext();
  const { getRandomUsers } = useHttp();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      getRandomUsers(
        {},
        (res) => {
          setLoading(false);
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
    })();
  }, []);

  return { loading };
};

export default useInitApp;
