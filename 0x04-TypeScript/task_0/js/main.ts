interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Two student objects
  const student1: Student = {
    firstName: "Ada",
    lastName: "Nwosu",
    age: 21,
    location: "Lagos"
  };
  
  const student2: Student = {
    firstName: "John",
    lastName: "Okoro",
    age: 24,
    location: "Abuja"
  };
  
  // Add to studentsList array
  const studentsList: Student[] = [student1, student2];
  
  // Render a table with their names and locations
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "50%";
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid #ccc";
    nameCell.style.padding = "8px";
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #ccc";
    locationCell.style.padding = "8px";
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Append table to the body
  document.body.appendChild(table);