import type { TUser } from '@domains/entities/User';
import type { UserRepository } from '@domains/repositories/interface/UserRepository';

export class GetUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(id: string): Promise<TUser> {
    return await this.userRepo.getUserById(id);
  }
}
