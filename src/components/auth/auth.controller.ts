import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthSignDto} from "./dto/auth.sign.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    signIn(@Body() signInDto: AuthSignDto) {
        return this.authService.signIn();
    }
}
