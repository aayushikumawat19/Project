import { User } from '@domains/entities/User';

export interface UserRepository {
  getUserById(id: string): Promise<User>;
}
