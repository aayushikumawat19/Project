import { BASE_URL } from "@config/constants";

export class FetchHTTP {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) throw new Error("Network error");
    return res.json() as Promise<T>;
  }
}
