import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import 'leaflet/dist/images/marker-icon.png';

interface CrashMapProps {
  lat: number;
  lng: number;
}

const CrashMap = (coords: CrashMapProps) => {
  const mapIcon = new Icon({
    iconUrl: '/map-marker.svg',
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={20}
      scrollWheelZoom={false}
      dragging={false}
      className='z-0'
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
