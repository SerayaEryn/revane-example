import {
  Body,
  Controller,
  ErrorHandler,
  Get,
  Logger,
  Param,
  Post,
  ResponseStatus,
} from "revane";
import { UserRepository } from "./UserRepository.js";
import { InvalidUserIdError } from "./InvalidUserId.js";

@Controller
export class UserController {
  constructor(
    private userRepository: UserRepository,
    private logger: Logger,
  ) {}

  @Get("/api/users/")
  public async getUsers() {
    return this.userRepository.getUsers();
  }

  @Get("/api/users/:id/")
  public async getUserById(@Param id: number) {
    if (id < 0) {
      throw new InvalidUserIdError();
    }
    return this.userRepository.getUser(id);
  }

  @Post("/api/users/")
  public async postUser(@Body body) {
    return this.userRepository.storeUser(body);
  }

  @ErrorHandler("REV_INVALID_USER_ID")
  @ResponseStatus(400)
  public async handleInvalidUserId(cause, request, reply): Promise<string> {
    this.logger.warn("Invalid user id", cause);
    return "Bad Request";
  }
}
