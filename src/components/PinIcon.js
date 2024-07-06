// src/components/PinIcon.js
import L from 'leaflet';

const pinIcon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/img/pin-icon.png`,
  iconSize: [45, 50], // Ajuste conforme necessário
  iconAnchor: [25, 50], // Ajuste conforme necessário
  popupAnchor: [0, -25] // Ajuste conforme necessário
});

export { pinIcon };
