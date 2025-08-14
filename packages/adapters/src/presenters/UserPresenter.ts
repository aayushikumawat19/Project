import type { TUser } from '@domains/entities/User';
import type { IUserDto } from '@domains/dtos/interface/IUserDTO';
export class UserPresenter {
  static mapToUserDto(user: TUser): IUserDto {
    return {
      userId: user.userId,
      title: user.title,
      body: user.body,
    };
  }
}
