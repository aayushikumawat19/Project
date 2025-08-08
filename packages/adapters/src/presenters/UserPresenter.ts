import { User } from '@domains/entities/User';
import { UserDTO } from '@domains/dtos/interface/UserDTO';

export class UserPresenter {
  static toDTO(user: User): UserDTO {
    return {
      id: user.id,
      fullName: user.name,
    };
  }
}
