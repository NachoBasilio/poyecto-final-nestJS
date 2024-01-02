import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel, PostModel } from './models';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.yu52y7x.mongodb.net/',
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel }]),
    MongooseModule.forFeature([{ name: 'Post', schema: PostModel }]),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
