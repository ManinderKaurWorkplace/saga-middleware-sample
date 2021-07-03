export const GET_EMPLOYEE_REQUEST = "GET_EMPLOYEE_REQUEST";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAILURE = "GET_EMPLOYEE_FAILURE";

/**
 * @method getEmployeeRequest : Action creator to request fetching Employee list
 */
export const getEmployeeRequest = () => {
  return {
    type: GET_EMPLOYEE_REQUEST,
  };
};

/**
 * @method getEmployeeSuccess : Action creator to handle success of fetch Employees request
 *
 * @param {Array<Record<string, any>>} payload : List of employee
 */
export const getEmployeeSuccess = (payload) => {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    payload,
  };
};

/**
 * @method getEmployeeFailure : Action creator to handle failure of fetch Employees request
 *
 * @param {string} errorMessage : Error message
 */
export const getEmployeeFailure = (errorMessage) => {
  return {
    type: GET_EMPLOYEE_FAILURE,
    errorMessage,
  };
};
