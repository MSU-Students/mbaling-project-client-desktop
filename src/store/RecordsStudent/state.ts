export interface StudentRowsInfo {
  number: string;
  password?: string;
  id: string;
  studentId: string;
  username: string;
  firstname: string;
  lastname: string;
  middlename: string;
  degree: string;
  department: string;
  college: string;
  email: string;
  year: string;
  contactNo: string;
  birthdate: string;
  street: string;
  barangay: string;
  municipality: string;
  province: string;
  housingUnit: string;
  //gender
}

export interface StudentStateInterface {
  allStudentRecords: StudentRowsInfo[];
  activeStudentRecords?: StudentRowsInfo;
}

function state(): StudentStateInterface {
  return {
    allStudentRecords: [
      {
        number: "1",
        id: "AOOAA001",
        studentId: "201812730",
        username: "palawanexpress98",
        firstname: "Nahed",
        lastname: "Bashier",
        middlename: "Solaiman",
        degree: "BS Information Technology",
        department: "Department of Technology",
        college: "College of Information and Computing Sciences",
        email: "bashier.ns30@s.msumain.edu.ph",
        year: "4rth Year College",
        contactNo: "0909-020-6862",
        birthdate: "October 20, 1999",
        street: "0059 Disarip Street",
        barangay: "Bubonga Marawi",
        municipality: "Marawi City",
        province: "Lanao Del Sur 9700",
        housingUnit: "Pirate",
      },
      {
        number: "2",
        id: "AOOAA002",
        studentId: "201812485",
        username: "jihoonluvluv24",
        firstname: "Jihoon",
        lastname: "Park",
        middlename: "Clent",
        degree: "BS Information Technology",
        department: "Department of Technology",
        college: "College of Information and Computing Sciences",
        email: "bashier.ns30@s.msumain.edu.ph",
        year: "3rd Year College",
        contactNo: "0909-020-6862",
        birthdate: "October 20, 1999",
        street: "0059 Disarip Street",
        barangay: "Bubonga Marawi",
        municipality: "Marawi City",
        province: "Lanao Del Sur 9700",
        housingUnit: "Warlock",
      },
    ],
  };
}

export default state;
