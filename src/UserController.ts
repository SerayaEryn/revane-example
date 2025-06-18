import { Body, Controller, Get, Param, Post } from "revane";
import { UserRepository } from "./UserRepository.js";

@Controller
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get("/api/users/")
  public async getUsers() {
    return this.userRepository.getUsers();
  }

  @Get("/api/users/:id/")
  public async getUserById(@Param id: number) {
    return this.userRepository.getUser(id);
  }

  @Post("/api/users/")
  public async postUser(@Body body) {
    return this.userRepository.storeUser(body);
  }
}
