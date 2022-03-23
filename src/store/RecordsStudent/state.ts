export interface StudentRowsInfo {
      number: string,
      id: string,
      studentId: string,
      username: string,
      firstname: string,
      lastname: string,
      middlename: string,
      degree: string,
      department: string,
      college: string,
      Iemail: string,
      contactNo: string,
      birthdate: string,
      housingAdd1: string,
      housingAdd2: string,
      housingAdd3: string,
      housingAdd4: string,
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
      Iemail: "bashier.ns30@s.msumain.edu.ph",
      contactNo: "0909-020-6862",
      birthdate: "October 20, 1999",
      housingAdd1: "0059 Disarip Street",
      housingAdd2: "Bubonga Marawi",
      housingAdd3: "Marawi City",
      housingAdd4: "Lanao Del Sur 9700",
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
      Iemail: "bashier.ns30@s.msumain.edu.ph",
      contactNo: "0909-020-6862",
      birthdate: "October 20, 1999",
      housingAdd1: "0059 Disarip Street",
      housingAdd2: "Bubonga Marawi",
      housingAdd3: "Marawi City",
      housingAdd4: "Lanao Del Sur 9700",
      },
    ]
  }
};

export default state;
