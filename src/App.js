import "./App.css";
import { useCallback, useState } from "react";
import UsernameInput from "./username";
import PasswordInput from "./password";

function App() {
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const onChange = useCallback((name, value) => {
    setFormValues({ ...formValues, [name]: value });
  });
  return (
    <div className="App">
      <UsernameInput value={formValues.username} onChange={onChange} />
      <PasswordInput value={formValues.password} onChange={onChange} />
    </div>
  );
}

export default App;
