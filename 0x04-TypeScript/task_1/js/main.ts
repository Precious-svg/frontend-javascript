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