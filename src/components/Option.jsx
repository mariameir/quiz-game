/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "../components/Option.css"

const Option = ({option, selectOption, answer, hide}) => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
      ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;