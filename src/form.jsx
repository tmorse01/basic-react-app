const FormComponent = ({ children }) => {
  return (
    <div>
      <h2>title of form</h2>
      <form>{children}</form>
    </div>
  );
};

export default FormComponent;
