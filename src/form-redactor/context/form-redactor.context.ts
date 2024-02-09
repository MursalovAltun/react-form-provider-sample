import { createContext } from "react";
import { Options } from "./form-redactor-context.options";

export const FormRedactorContext = createContext<Options | undefined>(
  undefined
);
