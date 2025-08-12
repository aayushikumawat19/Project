import { TUser } from '@domains/entities/User';
import { IUserDto } from '@domains/dtos/interface/IUserDTO';

export class UserPresenter {
  static mapToUserDto(user: TUser): IUserDto {
    return {
      title: user.title,
      body: user.body,
      userId: user.userId,
    };
  }
}
