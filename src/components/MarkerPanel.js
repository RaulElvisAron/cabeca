// src/components/MarkerPanel.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles.css'; // Importar o arquivo CSS

function MarkerPanel({ markerData, onChange, onClose, isPin, coordinates }) {
  const [title, setTitle] = useState(markerData.title);
  const [description, setDescription] = useState(markerData.description);
  const panelRef = useRef(null);

  useEffect(() => {
    setTitle(markerData.title);
    setDescription(markerData.description);
  }, [markerData]);

  const handleMouseDown = (e) => {
    const panel = panelRef.current;
    const shiftX = e.clientX - panel.getBoundingClientRect().left;
    const shiftY = e.clientY - panel.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      panel.style.left = pageX - shiftX + 'px';
      panel.style.top = pageY - shiftY + 'px';
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.onmouseup = null;
    };
  };

  const handleSave = () => {
    onChange(title, description);
    onClose();
  };

  return (
    <div className="marker-panel" ref={panelRef}>
      <div className="marker-panel-header" onMouseDown={handleMouseDown}>
        <h3>{isPin ? 'Editar Pino' : 'Editar Marcador'}</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="marker-panel-content">
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ fontWeight: 'bold' }}
          />
        </label>
        <label>
          Descrição:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="marker-panel-actions">
          <button onClick={handleSave}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
        <div className="coordinates">
          <small>Lat: {coordinates.lat.toFixed(3)}, Lng: {coordinates.lng.toFixed(3)}</small>
        </div>
      </div>
    </div>
  );
}

export default MarkerPanel;

