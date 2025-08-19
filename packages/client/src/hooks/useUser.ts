import { useState, useEffect, useCallback } from "react";
import type { IUserDto } from "@domains/dtos/interface/IUserDTO";
import { ApiUserRepository } from "@adapters/repositories/ApiUserRepository";

const userRepository = new ApiUserRepository();

export const useUser = (id: number) => {
  const [user, setUser] = useState<IUserDto | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userRepository.getUserById(id);
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { user, loading, refetch: fetchUser };
};
