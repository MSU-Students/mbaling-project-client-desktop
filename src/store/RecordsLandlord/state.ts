//Delete!
export interface LandlordRowsInfo {
  number: string,
  id: string,
  landlordid: string,
  username: string,
  firstname: string,
  lastname: string,
  middlename: string,
  addressline1: string,
  addressline2: string,
  addressline3: string,
}

export interface LandlordStateInterface {
  allLandlordRecords: LandlordRowsInfo[];
  activeLandlordRecords?: LandlordRowsInfo;
}

function state(): LandlordStateInterface {
  return {
    allLandlordRecords: [
      {
      number: "1",
      id: "AOOAA003",
      landlordid: "20220001",
      username: "pirateking_home",
      firstname: "Monkey",
      lastname: "Luffy",
      middlename: "Damulag",
      addressline1: "0059 5th Street",
      addressline2: "Brgy. Dimaluna I",
      addressline3: "MSU-Marawi",
      },
      {
        number: "2",
        id: "AOOAA004",
        landlordid: "20220021",
        username: "bandithking_home",
        firstname: "Donkey",
        lastname: "Frey",
        middlename: "Moo",
        addressline1: "0069 6th Street",
        addressline2: "Brgy. Dimaluna II",
        addressline3: "MSU-Marawi",
        }
    ]
  }
};

export default state;
