import { createContext, useReducer } from "react";
import data from "../data/questions";

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
        const reorderedQuestions = state.data.sort(() => {
          return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestions, 
      };

      case "CHANGE_QUESTION": {
        const nexQuestion = state.currentQuestion + 1;
        let endGame = false;
  
        if (!state.data[nexQuestion]) {
          endGame = true;
        }
  
  
        return{
          ...state,
          currentQuestion: nexQuestion, 
          gameStage: endGame ? STAGES[2] : state.gameStage,
        }}


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
