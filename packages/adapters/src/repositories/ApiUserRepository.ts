import { FetchHTTP } from "@adapters/infrastructures/FetchHTTP";
import type { IUserDto } from "@domains/dtos/interface/IUserDTO";

export class ApiUserRepository {
  private http: FetchHTTP;

  constructor() {
    this.http = new FetchHTTP();
  }

  async getUserById(id: number): Promise<IUserDto> {
    return this.http.get<IUserDto>(`/posts/${id}`);
  }
}
