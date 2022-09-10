export const ExampleError = class extends Error {
  message: string;

  constructor(message: string) {
    super(message);
    this.name = "ExampleError";
    this.message = message; //Displays the message to when an error is thrown.
    }
  }
