export class User {
  constructor(public user_id: number, public name: string, public surname: string, public email: string, public url: string, public password: string) {
    this.user_id = user_id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.url = url;
    this.password = password;
  }
}
