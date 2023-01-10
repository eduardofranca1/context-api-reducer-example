import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/ContextReducer";

export default function ShowData() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h3>Tela ShowData</h3>

      {state.user.name ? (
        <>
          MY NAME IS: {state.user.name} <br />I AM: {state.user.age} years old
        </>
      ) : (
        "Não há informações"
      )}
      <br />
      <Link to="/">Voltar para Sign Up</Link>
    </div>
  );
}
