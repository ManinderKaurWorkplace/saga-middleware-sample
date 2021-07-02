import React, { useCallback, useState } from "react";

import EmployeeHomeComponent from "./component";

const EmployeeHome = () => {
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
      employeeList={[]}
      loadingEmployees={false}
      search={search}
      selectedId={""}
      onChangeSearch={handleChangeSearch}
      onLoadRecords={handleLoadRecords}
      onSelectRecord={handleSelectRecord}
    />
  );
};

export default EmployeeHome;
