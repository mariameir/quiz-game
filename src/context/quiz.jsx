import { createContext, useReducer } from "react";
import data from '../data/questions';

const STAGES = ["Start", "Playing", "End"];
const initialStage = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      // eslint-disable-next-line no-case-declarations
      const reorderedQuestions = data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestions, 
      };

      case "CHANGE_QUESTION":
        // eslint-disable-next-line no-case-declarations
        const nextQuestion = state.currentQuestion + 1;
        return{
          ...state,
          currentQuestion: nextQuestion, 
        }


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
