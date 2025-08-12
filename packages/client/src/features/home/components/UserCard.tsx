import type { IUserDto } from '@domains/dtos/interface/IUserDTO';

export const UserCard = ({ user }: { user: IUserDto }) => (
  <div>
    <p>User ID: {user.userId}</p>
    <h3>{user.title}</h3>
    <p>Body: {user.body}</p>
  </div>
);