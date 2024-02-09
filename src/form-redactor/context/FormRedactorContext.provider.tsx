import { Options } from "./form-redactor-context.options";
import { FormRedactorContext } from "./form-redactor.context";

interface Props {
  value: Options;
  children: React.ReactElement;
}

export const FormRedactorProvider = ({ value, children }: Props) => {
  return (
    <FormRedactorContext.Provider value={value}>
      {children}
    </FormRedactorContext.Provider>
  );
};
