import * as Interfaces from './index';

export class User {
  gender: string;
  name: Interfaces.Name;
  location: Interfaces.Location;
  email: string;
  login: Interfaces.Login;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: Interfaces.Id;
  picture: Interfaces.Picture;
  nat: string;

  get fullName(): string {
    return `${this.name.title}  ${this.name.first} ${this.name.last}`;
  }
}
