/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState)
  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion} de 10</p>
      <h2>Pergunta atual</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  )
}

export default Question;