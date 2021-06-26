// export interface Contracts {
//   contract: Contract[];
//   advisor: Advisor[];
//   client: Client[];
// }


export interface Contract {
  registrationNumber: string;
  institution: string;
  conclusionDate: _Date;
  validityDate: _Date;
  terminationDate: _Date;
}

export interface _Date {
  day: number;
  month: number;
  year: number;
}

export interface PersonData {
  name: string;
  surname: string;
  age: number;
  email: string;
  telephoneNumber: string;
  nationalIdentificationNumber: string;
}

export interface Client extends PersonData {}
export interface Advisor extends PersonData { }
export interface Contracts {
  contract: Contract;
  client: Client;
  advisor: Advisor;
}


export interface Dates {
  minDay: number;
  maxDay: number;
  minMonth: number;
  maxMonth: number;
  minYear: number;
  maxYear: number;
}


export type Title = 'advisor' | 'client';

export interface Credentials {
  email: string;
  password: string;
}


export interface ExactPath {
  exact: boolean;
}