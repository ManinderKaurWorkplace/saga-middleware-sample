import * as actions from "../action";

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: "",
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };

    case actions.GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload || [],
      };

    case actions.GET_EMPLOYEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };

    default:
      return state;
  }
};

export default EmployeeReducer;
