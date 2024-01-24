

class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(` ID : ${this.emp_id}, Name: ${this.emp_name},Company :${this.emp_company} ,Department is :${this.emp_dept} ,salary :${this.emp_salary}`);
     } 
     getDetails1(){
        console.log(`Employee Name: ${this.emp_name} Company :${this.emp_company}  `);
     }
     getDetails2(){
      console.log(`  salary : ${this.emp_salary}`);
     }
     getDetails3(){
      console.log(`Department :${this.emp_dept}` );
     }

}
const emp_anil =new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha =new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi =new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali =new Employee(66 ,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny =new Employee(88,"VInayak","IT",75000,"TCS");
const emp_mahi =new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi ]

console.log("********************step=1*****************************");
const arrayEmpl= arrayEmps.filter( (element) => {
    return element.emp_company=='Wipro';
} );
console.log("arrayEmpl");
arrayEmpl.forEach(element => {
    console.log(element);
});
console.log("********************step=2***********************");
const arrayEmp2= arrayEmps.filter( ( emp ) => {
    return emp.emp_dept =='IT'|| emp.emp_dept=='HR'
} );

const empDept=arrayEmp2.reduce((rt,emp)=>{
    return rt+emp;
})

arrayEmp2.forEach(emp => {
    console.log(emp);
});

console.log("********************step=3***********************");
const arrayEmp3=arrayEmps.filter((element)=>{
    return element.emp_id >50;
});
const array =arrayEmp3.reduce((rt,element)=>{
    return rt+element.emp_id;
})

arrayEmp3.forEach((element)=>{
    console.log(element);
});

console.log("********************step=4***********************");
const arrayEmp4 =arrayEmps.filter((element)=>{

   
      return element.emp_name.startsWith('A') || element.emp_name.startsWith('V') || element.emp_name.startsWith('M')
});
const arrayemp =arrayEmp4.reduce((rt,element)=>{
    return rt+element.emp_name;
})

arrayEmp4.forEach((element)=>{
    console.log(element);
});

console.log("********************step=5***********************");

const arrayEmployees3 = arrayEmps.filter(function(element) {
    
    return element.emp_dept== 'IT'
   
    
});
 console.log(arrayEmployees3);

const Avarege1 =arrayEmployees3.reduce((rt,element) =>{
    return rt+element.emp_salary;
},0);
console.log(`Sum Salary :${Avarege1}`);

console.log(`Average is :${Avarege1/arrayEmployees3.length}`);

arrayEmployees3.forEach(element=>{
    console.log();

});
console.log("********************step=6***********************");
const arrayEmployees4 = arrayEmps.filter(function(element) {
    
    return element.emp_dept== 'IT'
   
    
});
 console.log(arrayEmployees4);

const Avarege2 =arrayEmployees4.reduce((rt,element) =>{
    return rt+element.emp_salary;
},0);
console.log(`Sum Salary :${Avarege2} `);

console.log(`Average is :${Avarege2/arrayEmployees4.length}`);

arrayEmployees4.forEach(element=>{
    console.log();

});



