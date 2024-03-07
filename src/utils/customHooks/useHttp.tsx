import axios from "axios";
import { IInfo, IResponse } from "../types";

const init: IInfo = {
  results: 0,
  page: 0,
};

const useHttp = () => {
  const getRandomUsers = async (
    options: IInfo | {} = init,
    succ: (arg0: IResponse) => void,
    fail: (arg0: any) => void
  ) => {
    const query = { ...init, ...options };
    try {
      const base = "https://randomuser.me";
      const queryParams = new URLSearchParams(
        query as Record<any, any>
      ).toString();
      const url = `${base}/api/?${queryParams}`;
      const response = await axios.get(url);
      succ(response?.data);
    } catch (error) {
      fail(error);
    }
  };

  return { getRandomUsers };
};

export default useHttp;
