import type { TUser } from "@domains/entities/User";

export class UserMapper {
  static toDomain(raw: TUser): TUser {
    return {
      userId: raw.userId,
      title: raw.title,
      body: raw.body,
    };
  }
}
