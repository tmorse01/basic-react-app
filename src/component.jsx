const component = ({ type, value, onChange }) => {
  if (type == "username") {
    return <UsernameInput value={formValues.username} onChange={onChange} />;
  }
};
