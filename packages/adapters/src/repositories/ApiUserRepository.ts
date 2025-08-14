import { FetchHTTP } from '@adapters/infrastructures/FetchHTTP';
import type { TUser } from '@domains/entities/User';

export class ApiUserRepository {
  private readonly http = new FetchHTTP();

  async getUsers(): Promise<TUser[]> {
    return this.http.get<TUser[]>('/users');
  }

  async getUserById(id: number): Promise<TUser> {
    return this.http.get<TUser>(`/posts/${id}`);
  }
}
