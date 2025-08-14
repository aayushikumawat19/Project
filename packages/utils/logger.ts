export class Logger {
  static log(message: string, data?: unknown) {
    console.log(`[LOG]: ${message}`, data || "");
  }

  static error(message: string, data?: unknown) {
    console.error(`[ERROR]: ${message}`, data || "");
  }
}
