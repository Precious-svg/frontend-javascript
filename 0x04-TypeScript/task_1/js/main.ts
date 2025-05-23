interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allow additional properties like contract
  }
  
  // Example usage
  const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "Lagos",
    contract: false, // additional property allowed
  };
  console.log(teacher1);

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  function printTeacher (firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`
  }
 
  interface StudentConstructor {
    firstName: string,
    lastName: string
  }

  interface StudentInterface {
    workOnHomework(): string,
    displayName(): string
  }

  class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }