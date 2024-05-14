import "./index.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MakerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import MakerIconShadow from "leaflet/dist/images/marker-shadow.png";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = L.icon({
  iconUrl: MarkerIcon,
  shadowUrl: MakerIconShadow,
  iconRetinaUrl: MakerIcon2x,
});

L.Marker.prototype.options.icon = DefaultIcon;

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import DraggableMarker from "./Market";

export default function Map({
  gsonData,
  startPosition,
  endPosition,
  setStartPosition,
  setEndPosition,
  loading,
}) {
  console.log(gsonData);
  return (
    <MapContainer center={[6.25184, -75.56359]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!loading ? (
        <GeoJSON key={1} data={gsonData} style={{ weight: 10, color: "red" }} />
      ) : null}
      <DraggableMarker
        position={startPosition}
        setPosition={setStartPosition}
      />
      <DraggableMarker position={endPosition} setPosition={setEndPosition} />
    </MapContainer>
  );
}
