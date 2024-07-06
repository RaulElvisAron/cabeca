import React, { useEffect } from "react";
import { Dice, initializeDice } from "./DiceBox";
import "./index.css";

export default function DiceRoller() {
  useEffect(() => {
    initializeDice().then(() => {
      document.addEventListener("mousedown", () => {
        const diceBoxCanvas = document.getElementById("dice-canvas");
        if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
          Dice.hide().clear();
        }
      });
    });
  }, []);

  const rollDice = (notation) => {
    const canvas = document.getElementById("dice-canvas");
    if (canvas && !canvas.hasAttribute("data-transferred")) {
      canvas.transferControlToOffscreen();
      canvas.setAttribute("data-transferred", "true");
    }
    Dice.show().roll(notation);
  };

  return (
    <div className="dice-roller">
      <button className="dice-button" onClick={() => rollDice("1d4")}>Roll d4</button>
      <button className="dice-button" onClick={() => rollDice("1d6")}>Roll d6</button>
      <button className="dice-button" onClick={() => rollDice("1d8")}>Roll d8</button>
      <button className="dice-button" onClick={() => rollDice("1d10")}>Roll d10</button>
      <button className="dice-button" onClick={() => rollDice("1d12")}>Roll d12</button>
      <button className="dice-button" onClick={() => rollDice("1d20")}>Roll d20</button>
    </div>
  );
}
