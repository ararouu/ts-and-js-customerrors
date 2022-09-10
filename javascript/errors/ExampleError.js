export const ExampleError = class extends Error {
  constructor(name, message) {
    super(name, message);
    this.name = "ExampleError";
    this.message = message;
    }
  }
