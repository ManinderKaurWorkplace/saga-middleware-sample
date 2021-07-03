import React, { useCallback, useState } from "react";
import { connect } from "react-redux";

import EmployeeHomeComponent from "./component";

const EmployeeHome = ({ employees }) => {
  const [search, setSearch] = useState("");

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

export default connect(mapStateToProps)(EmployeeHome);
