//Importing the errors:
import { CustomError } from "./errors/CustomError.js";
import { ExampleError } from "./errors/ExampleError.js";

//Throwing the error:
throw new CustomError("ExampleError", "Hiya! This is a demonstration of the custom error class.");
throw new ExampleError("Hiya! This is an example of the ExampleError. As you can see, we don't need to add a name to it!");
//trol