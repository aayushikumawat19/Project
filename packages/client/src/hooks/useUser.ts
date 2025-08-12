import { useEffect, useState } from 'react';
import { getUserUseCase, userPresenter } from '@shared/di/container';
import type { IUserDto } from '@domains/dtos/interface/IUserDTO';

export const useUser = (id: string) => {
  const [user, setUser] = useState<IUserDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const rawUser = await getUserUseCase.execute(id);
      const dto = userPresenter.mapToUserDto(rawUser);
      setUser(dto);
      setLoading(false);
    };
    fetchUser();
  }, [id]);
  
  return { user, loading };
};
