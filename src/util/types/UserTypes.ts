import { Location } from "./LocationTypes";

export type UserPreview = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type UserFull = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
};
