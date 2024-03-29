export const ExampleError = class extends Error {
  public message: string;

  public constructor(message: string) {
    super();
    this.name = "ExampleError";
    this.message = message; //Displays the message to when an error is thrown.
    }
  }
