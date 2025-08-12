import { ApiUserRepository } from '@adapters/repositories/ApiUserRepository';
import { GetUserUseCase } from '@domains/useCases/GetUserUseCase';
import { UserPresenter } from '@adapters/presenters//UserPresenter';

export const userRepository = new ApiUserRepository();
export const getUserUseCase = new GetUserUseCase(userRepository);
export const userPresenter = UserPresenter;