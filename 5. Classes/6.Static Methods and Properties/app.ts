class Employee {
  private static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    Employee.headcount++;
  }

  public static getHeadcount() {
    return Employee.headcount;
  }
}

let john = new Employee("John", "Doe", "Front-end Developer");
let jane = new Employee("Jane", "Doe", "Back-end Developer");

console.log(Employee.getHeadcount()); // 2
// if static property 'headcount',
//  calling the property is enought to get the head count and no getter would be necessary
