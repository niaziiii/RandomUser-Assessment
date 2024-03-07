export interface IName {
  title: string;
  first: string;
  last: string;
}
export interface ILocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}
export interface IDob {
  date: string;
  age: number;
}
export interface Ilogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
export interface IRegistered {
  date: string;
  age: number;
}
export interface IId {
  name: string;
  value: string;
}
export interface IPictures {
  large: string;
  medium: string;
  thumbnail: string;
}
export interface IInfo {
  seed?: string;
  results?: number;
  page?: number;
  version?: string;
}

export interface IRandomUser {
  id: IId;
  name: IName;
  gender: string;
  email: string;
  location: ILocation;
  login: Ilogin;
  dob: IDob;
  registered: IRegistered;
  phone: string;
  cell: string;
  picture: IPictures;
  nat: string;
}
export interface IResponse {
  results: IRandomUser[];
  info: IInfo;
}
