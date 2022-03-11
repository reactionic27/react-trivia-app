import axios from "axios";
import { stringify } from "qs";

export const CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };

export const makeApiRequest = ({
  data = {},
  handleError = null,
  method = "get",
  params = null,
  url: passedUrl = "",
}) => {
  const axiosInstance = axios.create();

  const queryString = stringify(params, { addQueryPrefix: true });
  const url = `/${passedUrl}${queryString}`;

  const headers = { ...CONTENT_TYPE_HEADER };

  let request = axiosInstance({ data, headers, method, url }).then(
    (response) => {
      if (response === undefined || response.data === undefined) {
        return null;
      }

      return response.data;
    }
  );

  if (handleError !== null) {
    request.catch(handleError);
  }

  return request;
};
