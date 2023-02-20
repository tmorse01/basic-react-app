const PasswordInput = ({ value, onChange }) => {
  console.log("password render: ", value);
  return (
    <input
      title="password"
      value={value}
      onChange={(e) => onChange("password", e.target.value)}
    />
  );
};

export default PasswordInput;
