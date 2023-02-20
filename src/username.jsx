const UsernameInput = ({ value, onChange }) => {
  console.log("username render: ", value);
  return (
    <input
      title="username"
      value={value}
      onChange={(e) => onChange("username", e.target.value)}
    />
  );
};

export default UsernameInput;
