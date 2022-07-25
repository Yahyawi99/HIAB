// React google map
import { Marker, GoogleMap, LoadScript } from "@react-google-maps/api";
// Css
import mapStyles from "../styles/map.module.css";

const Map = () => {
  const center = {
    lat: 33.555513,
    lng: -7.675778,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyALwMIiJJvLj2UKCkPXOKBQiuK7brQrOn8">
      <GoogleMap
        mapContainerClassName={`${mapStyles.map} hide`}
        zoom={15}
        center={center}
      >
        <Marker key="marker" position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
