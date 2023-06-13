import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/auth.module';
import { UserModule } from './components/user/user.module';
import { DatabaseModule } from './components/database/database.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}