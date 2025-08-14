import { useEffect, useState } from 'react';
import { ApiUserRepository } from '@adapters/repositories/ApiUserRepository';
import { UserPresenter } from '@adapters/presenters/UserPresenter';
import type { IUserDto } from '@domains/dtos/interface/IUserDTO';

export function useUser(id: number) {
  const [user, setUser] = useState<IUserDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new ApiUserRepository();
    repo.getUserById(id)
      .then(entity => setUser(UserPresenter.mapToUserDto(entity)))
      .catch((e) => {
        console.error('useUser error:', e.status, e.msg);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading };
}
