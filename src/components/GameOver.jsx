import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";
import WellDone from "../img/welldone.svg"; 



const GameOver = () => {
  return (
    <div id="gameover">
      <h2>Fim de Jogo</h2>
      <p>Pontuação:x</p>
      <p>Você acertou x de y perguntas </p>
      <img src={WellDone} alt="" />
      <button>Reiniciar</button>
      
    </div>
  )
}

export default GameOver;