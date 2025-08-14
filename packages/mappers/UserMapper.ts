import type { TUser } from '@domains/entities/User';

export class UserMapper {
  static toDomain(raw: TUser): TUser {
    return {
      userId: raw.userId,
      title: raw.title,
      body: raw.body,
    };
  }

  static toPersistence(user: TUser): TUser {
    return {
      userId: user.userId,
      title: user.title,
      body: user.body,
    };
  }
}
