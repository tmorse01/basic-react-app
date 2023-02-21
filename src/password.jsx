const PasswordInput = ({ value, onChange }) => {
  console.count("password render");
  return (
    <input
      title="password"
      value={value}
      onChange={(e) => onChange("password", e.target.value)}
    />
  );
};

export default PasswordInput;
