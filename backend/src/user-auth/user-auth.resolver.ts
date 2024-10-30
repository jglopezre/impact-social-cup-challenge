import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserAuthService } from './user-auth.service';
import { UserAuth } from './entities/user-auth.entity';
import { LoginUserInput } from './dto/login-user.input';
import { UnauthorizedException } from '@nestjs/common';
import { LogoutUserInput } from './dto/logout-user-auth.input';

@Resolver(() => UserAuth)
export class UserAuthResolver {
  constructor(private readonly userAuthService: UserAuthService) {}

  @Mutation(() => String)
  async logoutUser(@Args('userToken') logoutUserInput: LogoutUserInput) {
    const authResult = await this.userAuthService.logoutUser(logoutUserInput.token);

    if (!authResult) throw new UnauthorizedException('Invalid user Info');

    return authResult;
  }
  

  @Mutation(() => UserAuth)
  async loginUser(@Args('userData') loginUserInput: LoginUserInput) {
    const authResult = await this.userAuthService.loginUser(loginUserInput.username, loginUserInput.password);
    
    if (!authResult) throw new UnauthorizedException('Invalid username or password');

    return authResult;
  }
}
