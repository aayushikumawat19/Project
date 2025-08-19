export interface IApiError {
  status: number;
  message: string;
}

export interface IRequestLog {
  method: string;
  url: string;
  status: number;
  duration: number;
}
