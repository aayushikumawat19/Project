import { TUser } from '@domains/entities/User';

export interface UserRepository {
  getUserById(id: string): Promise<TUser>;
}
