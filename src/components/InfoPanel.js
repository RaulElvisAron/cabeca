// src/components/InfoPanel.js
import React, { useEffect, useState, useRef } from 'react';
import '../styles.css'; // Importar o arquivo CSS

function InfoPanel({ popupInfo, onClose }) {
  const panelRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 85 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const panel = panelRef.current;
    const shiftX = e.clientX - panel.getBoundingClientRect().left;
    const shiftY = e.clientY - panel.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      setPosition({ x: pageX - shiftX, y: pageY - shiftY });
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      setIsDragging(false);
    };
  };

  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [isDragging]);

  if (!popupInfo) return null;

  return (
    <div
      className="info-panel"
      ref={panelRef}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="info-panel-header" onMouseDown={handleMouseDown}>
        <h3>{popupInfo.name}</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <div className="description">
        <p>{popupInfo.description}</p>
      </div>
    </div>
  );
}

export default InfoPanel;
