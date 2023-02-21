import "./App.css";
import { useCallback, useState } from "react";
import UsernameInput from "./username";
import PasswordInput from "./password";
import FormComponent from "./form";
function App() {
  console.log("render app");
  const [formValues, setFormValues] = useState({ username: "", password: "" });
  const onChange = useCallback(
    (name, value) => {
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );
  return (
    <div className="App">
      <FormComponent>
        <UsernameInput value={formValues.username} onChange={onChange} />
        <PasswordInput value={formValues.password} onChange={onChange} />
      </FormComponent>
    </div>
  );
}

export default App;
