import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import EmployeeHomeComponent from "./component";
import * as actions from "../store/action";

const EmployeeHome = ({ employees, getEmployeeRequest }) => {
  const [search, setSearch] = useState("");
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    if (!employees.list.length) {
      getEmployeeRequest();
    }
    setEmployeeList(employees.list);
  }, [employees.list, getEmployeeRequest]);

  const handleChangeSearch = useCallback(
    (event) => {
      const formattedSearch = event.target.value.trim();
      setSearch(formattedSearch);
      const filteredEmployeeList = employees.list.filter(
        (field) =>
          field.employee_name.includes(formattedSearch) ||
          (field.employee_salary || "").toString().includes(formattedSearch) ||
          (field.employee_age || "").toString().includes(formattedSearch)
      );
      setEmployeeList(filteredEmployeeList);
    },
    [employees.list]
  );

  const handleLoadRecords = useCallback(() => {
    //TODO:
  }, []);

  const handleSelectRecord = useCallback(() => {
    //TODO:
  }, []);

  return (
    <EmployeeHomeComponent
      employeeList={employeeList}
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
