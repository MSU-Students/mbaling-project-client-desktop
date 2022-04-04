export interface AccountCreateStudentInfo {
  number: string,
  id: string,
  studentId: string,
  username: string,
  password: string,
  email: string,
  contactNo: string,
  college: string,
  department: string,
  degree: string,
  year: string,
  firstname: string,
  middlename: string,
  lastname: string,
  birthdate: string,
  street: string,
  barangay: string,
  municipality: string,
  province: string,
  housingUnit: string,
}

export interface AccountCreateLandlordInfo {
  username: string;
  password: string;
  MobileNo: string;
  firstname: string;
  middlename: string;
  lastname: string;
  birthdate: string;
  Address1: string;
  Address2: string;
  Address3: string;
  Address4: string;
  HousingUnit: string;
}

export interface AccountCreateInterface {
  allStudentAccount: AccountCreateStudentInfo[];
  activeStudentAccount?: AccountCreateStudentInfo;
  allLandlordAccount: AccountCreateLandlordInfo[];
  activeLandlordAccount?: AccountCreateLandlordInfo;
}

function state(): AccountCreateInterface {
  return {
    allStudentAccount: [
      {
        number: "1",
        id: "AOOAA001",
        studentId: "201812730",
        username: "palawanexpress98",
        password: "",
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
        password: "",
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
    allLandlordAccount: [
      {
        username: "",
        password: "",
        MobileNo: "",
        firstname: "",
        middlename: "",
        lastname: "",
        birthdate: "",
        Address1: "",
        Address2: "",
        Address3: "",
        Address4: "",
        HousingUnit: "",
      }
    ]
  }
};

export default state;
