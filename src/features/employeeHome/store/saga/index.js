import { put, takeLatest, call } from "redux-saga/effects";

import * as actions from "../action";
import { employee } from "../../../../api";

function* getEmployeeList() {
  try {
    const response = yield call(employee.getEmployees, {});
    if (response) {
      yield put(actions.getEmployeeSuccess(response.data));
    } else {
      yield put(actions.getEmployeeFailure("Unable to load employee list"));
    }
  } catch (error) {
    yield put(actions.getEmployeeFailure("Unable to load employee list"));
  }
}

export function* employeeSagas() {
  yield takeLatest(actions.GET_EMPLOYEE_REQUEST, getEmployeeList);
}

export default employeeSagas;
