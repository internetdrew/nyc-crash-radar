import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface CrashMapProps {
  lat: number;
  lng: number;
}

const CrashMap = (coords: CrashMapProps) => {
  const mapIcon = new Icon({
    iconUrl:
      'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
    iconSize: [38, 38],
  });
  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={15}
      scrollWheelZoom={false}
      dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[coords.lat, coords.lng]} icon={mapIcon} />
    </MapContainer>
  );
};

export default CrashMap;
