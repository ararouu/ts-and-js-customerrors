export const CustomError = class extends Error {
  public name: string;
  public message: string;

  public constructor(name: string, message: string) {
    super();
    this.name = name; //You can also set the name as anything if you remove name: strong and make this.name = "ErrorName".
    this.message = message; //Displays the message to when an error is thrown.
    }
  }
