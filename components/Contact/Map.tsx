import { MapContainer, TileLayer } from 'react-leaflet';

const MyMapComponent = () => {
  const center = [22.322240635206278, 73.0906855026042]; // Vadodara coordinates
  const zoom = 13; // Adjust zoom level as needed

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '450px', width: '600px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default MyMapComponent;
