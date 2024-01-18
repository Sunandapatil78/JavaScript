class Vehical {
  constructor(Name, Model, Year, color, mileage) {
    this.Name = Name;
    this.Model = Model;

    this.Year = Year;
    this.color = color;
    this.mileage = mileage;
  }
}

const Ford = new Vehical("Ford", "Mustang", "2020", "Grey", "16/23 km/l");
const Civic = new Vehical("civic", "Honda", "2021", "Black", "15/23 km/l");
const Honda = new Vehical("Toyato", "Rumion", "2023", "White", "15kmpl");
const Innova = new Vehical("Innova", "Toyato", "2017", "black", "13kmpl");
const Bolero = new Vehical("Bolero", "Mahindra", "2000", "white", "14kmpl");

console.log(Ford);
console.log("                                     ");
console.log(Civic);
console.log("                                     ");

console.log(Honda);
console.log("                                        ");
console.log(Innova);
console.log("                                         ");
console.log(Bolero);
console.log("                                       ");

console.log("Traversing array of Object...");
const arrayOfVehical = [Ford, Civic, Honda, Innova, Bolero];
for (const Vehical of arrayOfVehical) {
  console.log("Array Of Vehical is : ", Vehical);
}

console.log(
  "-----------------------------step-2-------------------------------"
);

class Collage {
  constructor(CollageName, Department, Address, Student) {
    this.CollageName = CollageName;
    this.Department = Department;
    this.Address = Address;

    this.Student = Student;
  }
  display() {
    console.log(
      `Name Of the collage is:${this.CollageName},Department Name is :${this.Department},Address:${this.Address},Student:${this.Student}`
    );
  }
  traversObject(obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];

        console.log(key, element);
      }
    }
  }
}

const AllanaInstitute = new Collage(
  "Allana Institute",
  "Management",
  "Pune",
  "7890"
);
console.log(AllanaInstitute);
console.log("             ");
const DamajiCollage = new Collage(
  "Damaji Collage",
  "Science",
  "Mangalwedha",
  "4098"
);
console.log(DamajiCollage);
console.log("             ");
const SangolaCollage = new Collage(
  "SangolaCollage",
  "Computer",
  "Sangola",
  "8790"
);
console.log(SangolaCollage);
console.log("             ");
const KBPCollage = new Collage("KBP Collage", "Science", "Pandharpur", "9876");
console.log(KBPCollage);
console.log(
  "---------------------------step -3-----------------------------------"
);

AllanaInstitute.traversObject(AllanaInstitute);
DamajiCollage.traversObject(DamajiCollage);
SangolaCollage.traversObject(SangolaCollage);
KBPCollage.traversObject(KBPCollage);
