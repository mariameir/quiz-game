/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "../components/Option.css"

const Option = ({option, selectOption, answer}) => {
  const [quizState, dispatch] = useContext(QuizContext);


  return (
    <div className="option" onClick={() => selectOption ()}>
      <p>{option}</p>
    </div>
  )
}

export default Option;