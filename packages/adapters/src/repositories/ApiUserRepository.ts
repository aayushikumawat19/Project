import type { TUser } from '@domains/entities/User';
import { BASE_URL } from '@config/constants';

export class ApiUserRepository {
  async getUserById(id: string): Promise<TUser> {
    const response = await fetch(`${BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }

    const data = await response.json();

    return {
      userId: data.userId,
      title: data.title,
      body: data.body,
    };
  }
}
