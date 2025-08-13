import { useEffect, useState } from 'react';
import { ApiUserRepository } from '@adapters/repositories/ApiUserRepository';
import { UserPresenter } from '@adapters/presenters/UserPresenter';
import type { IUserDto } from '@domains/dtos/interface/IUserDTO';

export function useUser(id: number) { // <-- number kiya
  const [user, setUser] = useState<IUserDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repo = new ApiUserRepository();

    repo.getUserById(id).then((entity) => {
      if (entity) {
        const dto = UserPresenter.mapToUserDto(entity);
        setUser(dto);
      }
      setLoading(false);
    });
  }, [id]);

  return { user, loading };
}
