import {Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginUserDto, CreateUserDto, ChangePasswordDto} from "./dto";
import {Auth, GetUser} from "./decorators";
import {User} from "./entities/user.entity";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  @Patch('change-password/:username')
  changePassword(
      @Param('username' ) param: string,
      @Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(param,changePasswordDto)
  }s

  @Post('login')
  loginUser(@Body() loginAuthDto: LoginUserDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('auth-status')
  @Auth()
  checkAuthStatus(
      @GetUser() user: User
  ) {
    return this.authService.checkAuthStatus( user );
  }

}
