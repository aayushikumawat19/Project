import { User } from '@domains/entities/User';
import { UserRepository } from '@domains/repositories/interface/UserRepository';

export class ApiUserRepository implements UserRepository {
  async getUserById(id: string): Promise<User> {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    return await response.json();
  }
}
