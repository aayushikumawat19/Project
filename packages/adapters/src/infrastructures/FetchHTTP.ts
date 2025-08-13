import { BASE_URL } from '@config/constants';

export class FetchHTTP {
  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) throw new Error(`GET ${url} failed`);
    return res.json();
  }
  
  async post<T>(url: string, body: any, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...options,
    });
    if (!res.ok) throw new Error(`POST ${url} failed`);
    return res.json();
  }

  async put<T>(url: string, body: any, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...options,
    });
    if (!res.ok) throw new Error(`PUT ${url} failed`);
    return res.json();
  }

  async delete<T>(url: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) throw new Error(`DELETE ${url} failed`);
    return res.json();
  }
}