export const BASE_URL = 'https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com';
export const API_TIMEOUT = 30000
// GET API LOGS BY CHANGE API LOG_VALUE "TRUE"
export const API_LOG = true;

export const API_GET_VENUES = `https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues`;

// REQUEST FAIL ERRORS

export const ERROR_REQUEST_TIMEOUT = {
    error: 1,
    title: "Request taking too much time",
    message:
      "We are sorry. It seems like something went wrong with your Internet connection"
  };
  export const ERROR_SERVER_CONNECTION = {
    error: 1,
    title: "Connection Error",
    message: "Server not available, bad dns."
  };
export const ERROR_REQUEST_CANCEL = {
    error: 1,
    title: "Request Canceled",
    message: "You have canceled request."
  };
  export const ERROR_NETWORK_NOT_AVAILABLE = {
    error: 1,
    title: "Network not available",
    message: "Please connect to the working Internet."
  };
  export const ERROR_SOMETHING_WENT_WRONG = {
    error: 1,
    title: "Whoops",
    message: "Looks like something went wrong."
  };