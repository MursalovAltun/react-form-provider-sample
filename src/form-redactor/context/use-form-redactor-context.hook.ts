import { useContext } from "react";
import { FormRedactorContext } from "./form-redactor.context";
import { Options } from "./form-redactor-context.options";

export const useFormRedactorContext = (): Options => {
  const context = useContext(FormRedactorContext);

  if (!context)
    throw new Error("No context defined or the value is not defined");

  return context;
};
