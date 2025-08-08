import { useEffect, useState } from 'react';
import { ApiUserRepository } from '@adapters/repositories/ApiUserRepository';
import { GetUserUseCase } from '@domains/useCases/GetUserUseCase';
import { UserPresenter } from '@client/presentation/useUserPresenter';

export const useUser = (id: string) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const repo = new ApiUserRepository();
      const useCase = new GetUserUseCase(repo);
      const rawUser = await useCase.execute(id);
      const dto = UserPresenter.toDTO(rawUser);
      setUser(dto);
      setLoading(false);
    };

    fetchUser();
  }, [id]);

  return { user, loading };
};
