import cx from "classnames";
import React, { useCallback } from "react";

const TableView = ({
  data = [],
  selectedId = "",
  loadingEmployees = false,
  onLoadRecords = () => {},
  onSelectRecord = () => {},
}) => {
  const handleScrollContent = useCallback(
    (event) => {
      if (onLoadRecords) {
        const { target } = event;
        if (target.scrollHeight - target.scrollTop - target.clientHeight < 1) {
          onLoadRecords();
        }
      }
    },
    [onLoadRecords]
  );

  return (
    <>
      <div className="table-container" onScroll={handleScrollContent}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr
                key={value.id}
                className={cx("data-row", {
                  active: selectedId === value.id,
                })}
                onClick={() => onSelectRecord(value)}
              >
                <td>{value.id}</td>
                <td>{value.employee_name}</td>
                <td>{value.employee_salary}</td>
                <td>{value.employee_age}</td>
                <td>
                  {!!value.profile_image ? (
                    <img src={value.profile_image} alt={""} />
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!data.length && (
        <div className="noDataFound">
          <p>
            {loadingEmployees
              ? "Loading employee records..."
              : "No Records Found"}
          </p>
        </div>
      )}
    </>
  );
};

export default TableView;
