// eslint-disable-next-line no-unused-vars
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Question.css'

export const Question = () => {
  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.data[quizState.currentQuestion];


  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.data.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch ({ type: "CHANGE_QUESTION"})} >Continuar</button>
    </div>
  )
}

export default Question;