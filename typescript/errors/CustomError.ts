export const CustomError = class extends Error {
  name: string;
  message: string;
  constructor(name: string, message: string) {
    super(name, message);
    this.name = name;
    this.message = message;
    }
  }
