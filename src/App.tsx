import { FormRedactorProvider, FormRedactorContainer } from "./form-redactor";

export const App = () => {
  return (
    <div>
      <FormRedactorProvider
        value={{
          onSubmit: (values) => {
            console.log("Form1Submit - ", values);
          },
        }}
      >
        <FormRedactorContainer />
      </FormRedactorProvider>

      <FormRedactorProvider
        value={{
          onSubmit: (values) => {
            console.log("Form2Submit - ", values);
          },
        }}
      >
        <FormRedactorContainer />
      </FormRedactorProvider>
    </div>
  );
};
