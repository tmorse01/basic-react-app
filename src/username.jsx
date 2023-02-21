const UsernameInput = ({ value, onChange }) => {
  console.count("username render");
  return (
    <input
      title="username"
      value={value}
      onChange={(e) => onChange("username", e.target.value)}
    />
  );
};

export default UsernameInput;
