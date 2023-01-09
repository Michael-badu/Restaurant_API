import { Module } from '@nestjs/common';
import { Addons_categoriesModule } from './addons-categories/addons_categories.module';
import { AddonsModule } from './addons/addons.module';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.modules';

@Module({
  imports: [
    AuthModule,
    PassportModule,
    JwtModule.register({ secret: 'secrete', signOptions: { expiresIn: '1h' } }),
    AddonsModule,
    Addons_categoriesModule,
    DatabaseModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, JwtStrategy],
})
export class AppModule {}
