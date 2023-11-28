// Problem 1
const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];
let JSONemployees = JSON.stringify(employees);
console.log('Problem 1:', JSONemployees);

// Problem 2
const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};

let JSONcompany = JSON.stringify(company);

console.log('Problem 2:', JSONcompany);

// Problem 3
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

JSONcompany = JSON.stringify(company);
JSONemployees = JSON.stringify(company.employees);

console.log('Problem 3:', JSONcompany);

// Problem 4
const employeess = JSON.parse(JSONemployees);
// console.log(employeess);
let totalSalary = 0;

for (let i = 0; i < employeess.length; i++) {
  totalSalary += employeess[i].salary;
//   console.log(employeess[i].salary);
}
console.log('Problem 4: Total Salary for all employees is', totalSalary);

// Problem 5
function giveRaiseAndUpdateEligibility() {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.1; // Increase salary by 10%
            employee.raiseEligible = false; // Set eligibility to false
        }
    });
}

giveRaiseAndUpdateEligibility();
JSONcompany = JSON.stringify(company);
console.log('Problem 5:', JSONcompany);

// Problem 6
const employeesWorkingFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
    employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

JSONcompany = JSON.stringify(company);
console.log('Problem 6:', JSONcompany);



