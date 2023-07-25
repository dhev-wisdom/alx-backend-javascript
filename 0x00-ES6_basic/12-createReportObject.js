export default function createReportObject(employeesList) {
  const returnObj = {};
  const allEmployees = {};
  const departments = Object.keys(employeesList);
  const employee = Object.values(employeesList);
  for (let i = 0; i < departments.length; i += 1) {
    allEmployees[departments[i]] = employee[i];
  }
  returnObj.allEmployees = allEmployees;
  returnObj.getNumberOfDepartments = (allEmployees) => Object.keys(allEmployees).length;
  return returnObj;
}
