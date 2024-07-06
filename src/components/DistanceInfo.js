import React from 'react';

function DistanceInfo({ distance, travelTime, speed, setSpeed, handleExport, handleImport, rollDice, resetDice }) {
  return (
    <div className="info-container">
      <div className="info-item distance">
        <strong>Distância Total: </strong>&nbsp;{distance.toFixed(2)} km
      </div>
      <div className="info-item controls">
        <label>
          Modo de Transporte:
          <select value={speed} onChange={e => setSpeed(Number(e.target.value))}>
            <option value={4.17}>Passos Curtos</option>
            <option value={7.14}>Passos Longos</option>
            <option value={11.11}>Galopes Curtos</option>
            <option value={33.33}>Galopes Longos</option>
            <option value={20.0}>Velas Curtas</option>
            <option value={34.0}>Velas Longas</option>
            <option value={100.0}>Voo Lento</option>
            <option value={300.0}>Voo Rápido</option>
          </select>
        </label>
      </div>
      <div className="info-item traveltime">
        <strong>Tempo de Viagem: </strong>&nbsp;{travelTime.days} dias {travelTime.hours} horas {travelTime.minutes} minutos
      </div>
      <div className="info-item dices">
        <button onClick={() => rollDice("1d4")}>d4</button>
        <button onClick={() => rollDice("1d6")}>d6</button>
        <button onClick={() => rollDice("1d8")}>d8</button>
        <button onClick={() => rollDice("1d10")}>d10</button>
        <button onClick={() => rollDice("1d12")}>d12</button>
        <button onClick={() => rollDice("1d20")}>d20</button>
        <button onClick={resetDice}>Limpar Dados</button>
      </div>
      <div className="info-item export">
        <button onClick={handleExport}>Exportar</button>
      </div>
      <div className="info-item import">
        <button onClick={handleImport}>Importar</button>
      </div>
    </div>
  );
}

export default DistanceInfo;
