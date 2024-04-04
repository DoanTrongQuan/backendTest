import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Post('create-user')
    create (@Body() user: UserEntity){
      return this.userService.create(user);
    
}

}

