import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/interfaces';

@Injectable()
export class AuthService {
  testUser: User;

  constructor(private jwtService: JwtService) {
    this.testUser = {
      id: 1,
      name: 'nacho',
      password: 'test',
    };
  }

  //Aqui traer el mongo
  async validateUser(username: string, password: string): Promise<any> {
    if (
      this.testUser?.name == username &&
      this.testUser?.password === password
    ) {
      return {
        userId: this.testUser.id,
        username: this.testUser.name,
      };
    }
    return null;
  }

  login(user: any) {
    const payload = {
      username: user.name,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
