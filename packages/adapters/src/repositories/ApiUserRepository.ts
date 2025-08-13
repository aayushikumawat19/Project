import { FetchHTTP } from '@adapters/infrastructures/FetchHTTP';
import type { TUser } from '@domains/entities/User';

export class ApiUserRepository {
  private http: FetchHTTP;

  constructor() {
    this.http = new FetchHTTP();
  }

  async getUsers(): Promise<TUser[]> {
    const data = await this.http.get<TUser[]>('/users');
    return data;
  }

 async getUserById(id: number) {
  return await this.http.get(`/posts/${id}`);
}

}
