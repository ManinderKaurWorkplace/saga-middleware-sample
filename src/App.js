import EmployeeHome from "./features/employeeHome/view";

const App = () => {
  return (
    <div className="root">
      <header className="header">
        <p>React and Redux-Saga Sample</p>
      </header>
      <EmployeeHome />
    </div>
  );
};

export default App;
