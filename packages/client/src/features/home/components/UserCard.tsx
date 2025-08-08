import React from 'react';
import type { UserDTO } from '@domains/dtos/interface/UserDTO';

export const UserCard = ({ user }: { user: UserDTO }) => (
  <div>
    <h2>{user.fullName}</h2>
    <p>ID: {user.id}</p>
  </div>
);
