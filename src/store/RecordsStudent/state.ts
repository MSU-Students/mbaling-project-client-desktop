export interface Users {
  id?: number;
   username?: string;
   password?: string;
   fName: string;
   mName?: string;
   lName: string;
   types: string;
   email: string;
   birthdate: string;
   degree: string;
   department: string;
   college: string;
   contact: string;
   gender:string;
   yearAdmit: string;
   address1: string;
   address2: string;
   address3: string;
   address4: string;
   housingunit: string;
   status: 'active' | 'inactive'
}

export interface AccountStateInterface {
  allAccount: Users[];
  newUser?: Users;
}

function state(): AccountStateInterface {
  return {
    allAccount: [],
  };
}

export default state;
