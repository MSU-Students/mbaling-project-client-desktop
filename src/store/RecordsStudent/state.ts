export interface StudentRowsInfo {
  number: string;
  isStudent: boolean;
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

export interface LandlordRowsInfo {
  number: string;
  password?: string;
  id: string;
  landlordid: string;
  username: string;
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
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
  allLandlordRecords: LandlordRowsInfo[];
  activeLandlordRecords?: LandlordRowsInfo;
}

function state(): StudentStateInterface {
  return {
    allStudentRecords: [
      {
        number: "1",
        isStudent: true,
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
        isStudent: true,
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
    allLandlordRecords: [
      {
      number: "1",
      id: "AOOAA003",
      landlordid: "20220001",
      username: "pirateking_home",
      firstname: "Monkey",
      lastname: "Luffy",
      middlename: "Damulag",
      email: "landlord1@gmail.com",
      contactNo: "0909-090-9090",
      birthdate: "January 05, 1890",
      street: "0059 5th Street",
      barangay: "Brgy. Dimaluna I",
      municipality: "MSU-Marawi",
      province: "Lanao Del Sur",
      housingUnit: "Pirate",
      },
      {
      number: "2",
      id: "AOOAA004",
      landlordid: "20220021",
      username: "bandithking_home",
      firstname: "Donkey",
      lastname: "Frey",
      middlename: "Moo",
      email: "Bandits09@gmail.com",
      contactNo: "0911-111-1111",
      birthdate: "March 14, 1880",
      street: "0069 6th Street",
      barangay: "Brgy. Dimaluna II",
      municipality: "MSU-Marawi",
      province: "Lanao Del Sur",
      housingUnit: "Bandits",
        }
    ]
  };
}

export default state;
