import { create } from 'apisauce'
import { API_LOG, API_TIMEOUT, BASE_URL, ERROR_NETWORK_NOT_AVAILABLE, ERROR_REQUEST_CANCEL, ERROR_REQUEST_TIMEOUT, ERROR_SERVER_CONNECTION, ERROR_SOMETHING_WENT_WRONG } from '../config/constants';


const api = create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    timeout: API_TIMEOUT
  });

  class ApiSauce {

      // for simple get request
  async get(url, data, headers={}) {
    const response = await api.get(url, data, { headers: {...headers} });

    if (__DEV__ && API_LOG) {
    //   console.log(response);
    }

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    // console.log({response})
    
    if (response.ok && response.data ) {
      resolve(response.data);
    } else {
      let error = ERROR_SOMETHING_WENT_WRONG;

      switch (response.problem) {
        case "TIMEOUT_ERROR":
          error = ERROR_REQUEST_TIMEOUT;
          break;
        case "CONNECTION_ERROR":
          error = ERROR_SERVER_CONNECTION;
          break;
        case "NETWORK_ERROR":
          error = ERROR_NETWORK_NOT_AVAILABLE;
          break;
        case "CANCEL_ERROR":
          error = ERROR_REQUEST_CANCEL;
          break;
        default:
          // "SERVER_ERROR":
          error = { status: response.status, ...ERROR_SOMETHING_WENT_WRONG };
      }
      if (response.status === 500) {
        reject(ERROR_SOMETHING_WENT_WRONG);
      }

      reject(
        response.data || ERROR_SOMETHING_WENT_WRONG
      );
    }
  };

  }
  export default new ApiSauce();