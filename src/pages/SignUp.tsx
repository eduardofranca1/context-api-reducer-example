import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/ContextReducer";

export default function SignUp() {
  const { state, dispatch } = useContext(Context);

  const [name, setName] = useState<string>(state.user.name);
  const [age, setAge] = useState<number>(state.user.age);

  /**
   * o valor do contexto também pode ser alterando sem precisa usar hooks,
   * apenas digitando o valor no input ele já grava
   * como no exemplo abaixo:
   */

  const handleSave = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: name,
      },
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        age: age,
      },
    });
  };

  return (
    <div>
      <h3>SignUp Screen</h3>
      Tema: {state.theme.status}
      <input
        type="text"
        placeholder="Write a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write an age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <button onClick={handleSave}>Save</button>
      <br />
      <Link to="/exibir">Go to Show Data</Link>
    </div>
  );
}
