import { useContext  } from "react";
import { QuizContext } from "../context/quiz";
import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const quizState = useContext(QuizContext);

  console.log(quizState);
  return (
    <div id="welcome">
      <h2>Seja bem vindo(a) ao quiz de React.JS</h2>
      <p>Clique no botão para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="inicio do quiz" />

    </div>
  )
}

export default Welcome;