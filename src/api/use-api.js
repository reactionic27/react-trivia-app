import { useContext, useState, useEffect } from "react";
import { makeApiRequest } from "./make-api-request";
import { AppContext } from "../App";

export const useApi = (passedHookConfig = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { state, dispatch } = useContext(AppContext);

  const baseConfig = {
    data: {},
    manual: false,
    method: "get",
    params: null,
    url: "",
  };

  const hookConfig = { ...baseConfig, ...passedHookConfig };

  const [isPending, setIsPending] = useState(!hookConfig.manual);

  const makeRequest = (passedRequestConfig = {}) => {
    const requestConfig = { ...hookConfig, ...passedRequestConfig };

    setIsPending(true);
    setError(null);

    return makeApiRequest(requestConfig)
      .then((data) => {
        setData(data);
        if (hookConfig.state) {
          dispatch({
            type: hookConfig.state,
            payload: data,
          });
        }
        return data;
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  useEffect(() => {
    if (!hookConfig.manual && (!hookConfig.state || !state[hookConfig.state])) {
      makeRequest();
    } else {
      setIsPending(false);
      setData(state[hookConfig.state]);
    }
    // We only want this effect to run once, so passing an empty array is fine.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    makeRequest,
    {
      data,
      error,
      isPending,
    },
  ];
};
