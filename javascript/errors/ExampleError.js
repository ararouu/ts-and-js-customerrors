export const ExampleError = class extends Error {
  constructor(message) {
    super(message);
    //uwu
    this.name = "ExampleError";
    this.message = message;
    }
  }
