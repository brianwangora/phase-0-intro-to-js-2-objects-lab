// Write your solution in this file!

const employee = {
    Bob: "1121-Acacia",
    Steven: "234-Lincoln",
    Jane: "342-Waverly",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee}
    newemployee[key] = value
    return newemployee
};
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
};
function deleteFromEmployeeByKey (employee, key) {
    const employee1 = {...employee}
    delete employee1[key];
    return employee1
};   
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}
