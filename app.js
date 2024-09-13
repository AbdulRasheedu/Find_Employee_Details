const employees = [
  {
    id: 1,
    name: "John Doe",
    designation: "Manager",
    salary: 50000,
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Developer",
    salary: 60000,
    location: "San Francisco",
  },
  {
    id: 3,
    name: "Sam Wilson",
    designation: "Designer",
    salary: 45000,
    location: "Los Angeles",
  },
  {
    id: 4,
    name: "Anna Taylor",
    designation: "Tester",
    salary: 40000,
    location: "Chicago",
  },
  {
    id: 5,
    name: "Mike Brown",
    designation: "HR",
    salary: 52000,
    location: "Houston",
  },
  {
    id: 6,
    name: "Chris Johnson",
    designation: "Support Engineer",
    salary: 48000,
    location: "Seattle",
  },
  {
    id: 7,
    name: "Olivia Davis",
    designation: "Accountant",
    salary: 55000,
    location: "Miami",
  },
  {
    id: 8,
    name: "Sophia Moore",
    designation: "Marketing Manager",
    salary: 62000,
    location: "Boston",
  },
  {
    id: 9,
    name: "James Anderson",
    designation: "Sales Executive",
    salary: 53000,
    location: "Dallas",
  },
  {
    id: 10,
    name: "Mia Martinez",
    designation: "Project Manager",
    salary: 68000,
    location: "Phoenix",
  },
  {
    id: 11,
    name: "Liam Thompson",
    designation: "Software Engineer",
    salary: 70000,
    location: "Denver",
  },
  {
    id: 12,
    name: "Noah Clark",
    designation: "UI/UX Designer",
    salary: 46000,
    location: "San Diego",
  },
  {
    id: 13,
    name: "Ethan Allen",
    designation: "DevOps Engineer",
    salary: 72000,
    location: "Austin",
  },
  {
    id: 14,
    name: "Isabella Harris",
    designation: "QA Engineer",
    salary: 44000,
    location: "Detroit",
  },
  {
    id: 15,
    name: "Ava Scott",
    designation: "Legal Advisor",
    salary: 75000,
    location: "Washington D.C.",
  },
  {
    id: 16,
    name: "Mason Turner",
    designation: "Consultant",
    salary: 60000,
    location: "Charlotte",
  },
  {
    id: 17,
    name: "Lucas Martinez",
    designation: "Network Engineer",
    salary: 62000,
    location: "Portland",
  },
  {
    id: 18,
    name: "Amelia Evans",
    designation: "Product Manager",
    salary: 68000,
    location: "Baltimore",
  },
  {
    id: 19,
    name: "Harper Ramirez",
    designation: "IT Support",
    salary: 46000,
    location: "Salt Lake City",
  },
  {
    id: 20,
    name: "Benjamin Lewis",
    designation: "Business Analyst",
    salary: 58000,
    location: "Orlando",
  },
  {
    id: 21,
    name: "Elijah King",
    designation: "Cloud Architect",
    salary: 78000,
    location: "Las Vegas",
  },
  {
    id: 22,
    name: "Abigail Wright",
    designation: "Scrum Master",
    salary: 65000,
    location: "Nashville",
  },
  {
    id: 23,
    name: "Alexander Lee",
    designation: "Database Administrator",
    salary: 74000,
    location: "Philadelphia",
  },
  {
    id: 24,
    name: "Charlotte Perez",
    designation: "Security Analyst",
    salary: 64000,
    location: "San Antonio",
  },
  {
    id: 25,
    name: "William Adams",
    designation: "Operations Manager",
    salary: 72000,
    location: "Indianapolis",
  },
  {
    id: 26,
    name: "Emily Nelson",
    designation: "Content Writer",
    salary: 42000,
    location: "Raleigh",
  },
  {
    id: 27,
    name: "Daniel Baker",
    designation: "System Administrator",
    salary: 62000,
    location: "Memphis",
  },
  {
    id: 28,
    name: "Sofia Roberts",
    designation: "HR Manager",
    salary: 55000,
    location: "Kansas City",
  },
  {
    id: 29,
    name: "Matthew Campbell",
    designation: "Frontend Developer",
    salary: 64000,
    location: "Columbus",
  },
  {
    id: 30,
    name: "Madison Edwards",
    designation: "Backend Developer",
    salary: 66000,
    location: "St. Louis",
  },
  {
    id: 31,
    name: "Henry Morris",
    designation: "Software Architect",
    salary: 85000,
    location: "Pittsburgh",
  },
  {
    id: 32,
    name: "Victoria Sanders",
    designation: "PR Specialist",
    salary: 53000,
    location: "Cleveland",
  },
  {
    id: 33,
    name: "Joseph Hill",
    designation: "IT Consultant",
    salary: 68000,
    location: "Tampa",
  },
  {
    id: 34,
    name: "David Barnes",
    designation: "Customer Support",
    salary: 40000,
    location: "New Orleans",
  },
  {
    id: 35,
    name: "Sophia Cox",
    designation: "Graphic Designer",
    salary: 47000,
    location: "Milwaukee",
  },
  {
    id: 36,
    name: "Aiden Cooper",
    designation: "Tech Lead",
    salary: 78000,
    location: "San Jose",
  },
  {
    id: 37,
    name: "Chloe Reed",
    designation: "HR Specialist",
    salary: 52000,
    location: "Jacksonville",
  },
  {
    id: 38,
    name: "Jack Ward",
    designation: "Sales Manager",
    salary: 64000,
    location: "Oklahoma City",
  },
  {
    id: 39,
    name: "Avery Brooks",
    designation: "Finance Manager",
    salary: 70000,
    location: "Louisville",
  },
  {
    id: 40,
    name: "Logan Bailey",
    designation: "Data Scientist",
    salary: 84000,
    location: "Richmond",
  },
  {
    id: 41,
    name: "Ella Bell",
    designation: "SEO Specialist",
    salary: 46000,
    location: "Buffalo",
  },
  {
    id: 42,
    name: "Evelyn Parker",
    designation: "Content Strategist",
    salary: 48000,
    location: "Birmingham",
  },
  {
    id: 43,
    name: "Grace Green",
    designation: "Operations Analyst",
    salary: 54000,
    location: "Sacramento",
  },
  {
    id: 44,
    name: "Oliver Howard",
    designation: "Machine Learning Engineer",
    salary: 87000,
    location: "Hartford",
  },
  {
    id: 45,
    name: "Jacob Torres",
    designation: "AI Specialist",
    salary: 89000,
    location: "Providence",
  },
  {
    id: 46,
    name: "Scarlett Phillips",
    designation: "Full Stack Developer",
    salary: 76000,
    location: "Fresno",
  },
  {
    id: 47,
    name: "Levi Butler",
    designation: "Data Engineer",
    salary: 82000,
    location: "Mesa",
  },
  {
    id: 48,
    name: "Zoe Sanders",
    designation: "Digital Marketer",
    salary: 53000,
    location: "Albuquerque",
  },
  {
    id: 49,
    name: "Emily Peterson",
    designation: "Cloud Engineer",
    salary: 80000,
    location: "Tucson",
  },
  {
    id: 50,
    name: "Owen Foster",
    designation: "Cybersecurity Engineer",
    salary: 85000,
    location: "Madison",
  },
];

// Function to search for an employee by ID
function searchEmployee() {
  const employeeId = document.getElementById("employeeId").value;
  const employeeDetailsDiv = document.getElementById("employeeDetails");

  // Find employee by ID
  const employee = employees.find((emp) => emp.id == employeeId);

  if (employee) {
    // Display employee details
    employeeDetailsDiv.innerHTML = `
          <h2>Employee Details</h2>
          <p><strong>ID:</strong> ${employee.id}</p>
          <p><strong>Name:</strong> ${employee.name}</p>
          <p><strong>Designation:</strong> ${employee.designation}</p>
          <p><strong>Salary:</strong> $${employee.salary}</p>
          <p><strong>Location:</strong> ${employee.location}</p>
      `;
    employeeDetailsDiv.style.display = "block";
  } else {
    // Show error if no employee found
    employeeDetailsDiv.innerHTML =
      "<p><strong>No employee found with this ID.</strong></p>";
    employeeDetailsDiv.style.display = "block";
  }
}

