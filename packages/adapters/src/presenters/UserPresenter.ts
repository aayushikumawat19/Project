import type { IUserDto } from '@domains/dtos/interface/IUserDTO';

export class UserPresenter {
  static mapToUserDto(entity: any): IUserDto {
    return {
      userId: entity.userId,
      title: entity.title,
      body: entity.body
    };
  }
}
