import { BASE_URL } from '@config/constants';

export class FetchHTTP {
  private baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async get<T>(url: string): Promise<T> {
    console.log(`[GET] ${this.baseUrl}${url}`);
    const response = await fetch(`${this.baseUrl}${url}`);
    return response.json();
  }

  async post<T>(url: string, body: any): Promise<T> {
    console.log(`[POST] ${this.baseUrl}${url}`, body);
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return response.json();
  }
}
