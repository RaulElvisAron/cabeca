import { useMapEvents } from 'react-leaflet';
import { v4 as uuidv4 } from 'uuid';

function AddMarker({ markers, setMarkers }) {
  useMapEvents({
    click(e) {
      const newMarker = { id: uuidv4(), lat: e.latlng.lat, lng: e.latlng.lng };
      setMarkers([...markers, newMarker]);
    }
  });

  return null;
}

export default AddMarker;
