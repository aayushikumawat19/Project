import { UserRepository } from '@domains/repositories/interface/UserRepository';

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    return this.userRepository.getUserById(userId);
  }
}
