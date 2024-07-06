import { useMapEvents } from 'react-leaflet';
import { v4 as uuidv4 } from 'uuid';

function AddPin({ pins, setPins }) {
  useMapEvents({
    contextmenu(e) {
      const newPin = { id: uuidv4(), lat: e.latlng.lat, lng: e.latlng.lng };
      setPins([...pins, newPin]);
    }
  });

  return null;
}

export default AddPin;
