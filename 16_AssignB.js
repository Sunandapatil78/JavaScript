class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
  getDetails() {
    console.log(
      ` ID :${this.emp_id}, Name: ${this.emp_name},Company :${this.emp_company} ,Department is :${this.emp_dept} ,salary :${this.emp_salary}`
    );
  }
  getDetails1() {
    console.log(
      `Employee Name :${this.emp_name} Company Name :${this.emp_company} `
    );
  }
  getDetails2() {
    console.log(
      `Employee Name :${this.emp_name} Department :${this.emp_dept} `
    );
  }
  getDetails3() {
    console.log(
      `Employee Name:${this.emp_name} salary :${this.emp_salary} Company :${this.emp_company}`
    );
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "VInayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];
console.log(".............................................................");
console.log(`======  find the all employee working in "TCS===============`);
for (const iterator of arrayEmployees) {
  if (iterator.emp_company == "TCS") {
    iterator.getDetails1();
  }
 
}
console.log("                                               ");
console.log(`======  find the Finance department employees===============`);
for (const emp_name of arrayEmployees) {
  if (emp_name.emp_dept == "Finance") {
    emp_name.getDetails();
  }
}

console.log(
  `====== WAP to find the employee whose name starts with letter 'R'================`
);

for (const element of arrayEmployees) {
  if (element.emp_name.startsWith("R")) {
    element.getDetails();
  }
}

console.log(
  "...........................step-4...................................."
);
for (const element of arrayEmployees) {
  if (element.emp_salary > 75000) {
    element.getDetails3();
  }
}

console.log(
  "...........................step-5...................................."
);
for (const emp of arrayEmployees) {
  if (emp.emp_salary >= 50000 && emp.emp_dept == "IT") {
    emp.getDetails();
  }
}

console.log("                                               ");
console.log(`=======================step=6================`);
for (const element of arrayEmployees) {
  if (element.emp_company == "Infy") {
    element.getDetails();
  }
}
arrayEmployees.forEach((element)=>{
   
})