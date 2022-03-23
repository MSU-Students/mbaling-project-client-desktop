export interface AccountCreateStudentInfo {
  username: string,
  password: string,
  email: string,
  MobileNo: string,
  College: string,
  Department: string,
  Degree: string,
  Year: string,
  firstname: string,
  middlename: string,
  lastname: string,
  birthdate: string,
  Address1: string,
  Address2: string,
  Address3: string,
  Address4: string,
  HousingUnit: string,
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
        username: "",
        password: "",
        email: "",
        MobileNo: "",
        College: "",
        Department: "",
        Degree: "",
        Year: "",
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
