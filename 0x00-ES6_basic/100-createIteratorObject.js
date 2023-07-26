export default function createIteratorObject(report) {
  let employees = [];
  employees = Object.values(report.allEmployees).flat();
  return employees;
}
