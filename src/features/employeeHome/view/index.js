import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import EmployeeHomeComponent from "./component";
import * as actions from "../store/action";

const EmployeeHome = ({ employees, getEmployeeRequest }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!employees.list.length) {
      getEmployeeRequest();
    }
  }, [employees.list, getEmployeeRequest]);

  const handleChangeSearch = useCallback((event) => {
    const formattedSearch = event.target.value.trim();
    setSearch(formattedSearch);
  }, []);

  const handleLoadRecords = useCallback(() => {
    //TODO:
  }, []);

  const handleSelectRecord = useCallback(() => {
    //TODO:
  }, []);

  return (
    <EmployeeHomeComponent
      employeeList={employees.list}
      loadingEmployees={employees.isLoading}
      search={search}
      selectedId={""}
      onChangeSearch={handleChangeSearch}
      onLoadRecords={handleLoadRecords}
      onSelectRecord={handleSelectRecord}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeRequest: () => dispatch(actions.getEmployeeRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeHome);
