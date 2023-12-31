/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";
import data from "../data/questions";

const STAGES = ["Start", "Playing", "End"];
const initialStage = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      // eslint-disable-next-line no-case-declarations
      const reorderedQuestions = state.data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestions,
      };

      case "CHANGE_QUESTION": {
        const nextQuestion = state.currentQuestion + 1;
      
        if (!state.data[nextQuestion]) {
          return {
            ...state,
            gameStage: "End", 
            answerSelected: false, 
          };
        }
      
        return {
          ...state,
          currentQuestion: nextQuestion,
          answerSelected: false,
          help: false,
        };
      }

    case "NEW_GAME":
      return initialStage;

    case "CHECK_ANSWER":
      if (state.answerSelect) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizProvider; // Exporta o QuizProvider diretamente no final do arquivo
