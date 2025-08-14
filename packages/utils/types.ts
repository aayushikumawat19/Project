export interface ApiError {
  status: number;
  message: string;
}

export interface RequestLog {
  method: string;
  url: string;
  status: number;
  duration: number;
}
