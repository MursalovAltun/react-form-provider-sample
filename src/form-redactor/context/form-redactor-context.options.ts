export interface Options {
  onSubmit: (formValues: unknown) => Promise<void> | void;
}
