// src/components/MarkerIcon.js
import L from 'leaflet';

const firstMarkerIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/first-marker-icon.png`,
  iconSize: [43, 44], // Ajuste conforme necessário
  iconAnchor: [22, 41], // Ajuste conforme necessário
  popupAnchor: [4.3, -44], // Ajuste conforme necessário
  shadowSize: [41, 41] // Ajuste conforme necessário
});

const subsequentMarkerIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/subsequent-marker-icon.png`,
  iconSize: [25, 35], // Ajuste conforme necessário
  iconAnchor: [12, 35], // Ajuste conforme necessário
  popupAnchor: [2.5, -35], // Ajuste conforme necessário
  shadowSize: [41, 41] // Ajuste conforme necessário
});

export { firstMarkerIcon, subsequentMarkerIcon };
