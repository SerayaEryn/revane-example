import { Component, PostConstruct } from "revane";

@Component
export class UserRepository {
  users;

  @PostConstruct
  public postConstruct() {
    this.users = [
      {
        id: 1,
        name: "Lina",
      },
      {
        id: 2,
        name: "Peter",
      },
    ];
  }

  public getUser(id: number) {
    return this.users.filter((user) => user.id == id)[0];
  }

  public getUsers() {
    return this.users;
  }

  public storeUser(user) {
    this.users.push(user);
  }
}
