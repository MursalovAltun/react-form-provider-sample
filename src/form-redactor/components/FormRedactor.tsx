import { useFormRedactorContext } from "../context/use-form-redactor-context.hook";

export const FormRedactor = () => {
  const { onSubmit } = useFormRedactorContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    onSubmit(Object.fromEntries(formData.entries()));
  };
  return (
    <form className="form-redactor" onSubmit={handleSubmit}>
      <input type="text" name="test" />

      <button type="submit">Submit</button>
    </form>
  );
};
