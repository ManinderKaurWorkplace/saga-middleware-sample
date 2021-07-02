import React from "react";

import { SearchField, Table } from "../../../components";

const EmployeeHomeComponent = ({
  employeeList,
  loadingEmployees,
  search,
  selectedId,
  onChangeSearch,
  onLoadRecords,
  onSelectRecord,
}) => {
  return (
    <div>
      <div>
        <SearchField value={search} onChange={onChangeSearch} />
      </div>
      <div>
        <Table
          data={employeeList}
          selectedId={selectedId}
          loadingEmployees={loadingEmployees}
          onLoadRecords={onLoadRecords}
          onSelectRecord={onSelectRecord}
        />
      </div>
    </div>
  );
};

export default EmployeeHomeComponent;
