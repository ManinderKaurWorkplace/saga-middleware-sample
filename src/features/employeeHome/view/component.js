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
      <SearchField value={search} onChange={onChangeSearch} />
      <Table
        data={employeeList}
        noRecordMessage={
          !!search && 'No records for "' + search + '". Try again'
        }
        selectedId={selectedId}
        loadingEmployees={loadingEmployees}
        onLoadRecords={onLoadRecords}
        onSelectRecord={onSelectRecord}
      />
    </div>
  );
};

export default EmployeeHomeComponent;
