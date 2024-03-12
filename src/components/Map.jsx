import { useRef, useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const Map = ({ ipAddress }) => {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

   // const position = [51.505, -0.09];
  // const latitude = 51.505;
  // const longitude = -0.09;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_QosdPoHH6MLR1muDWFsRNaWlHn7E6&ipAddress=${ipAddress}`)
        setLocation(response.data.location)
      } catch (error) {
        console.error('Error fetching location data:', error)
      }
    }

    fetchData()
  },[ipAddress])

  return (
  
      <MapContainer ref={mapRef} center={location ? [location.lat, location.lng] : [0, 0]} zoom={13} scrollWheelZoom={false} className="w-full">
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {location && (
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            <b>IP Address Location</b>
            <br /> 
            {`Latitude: ${location.lat}, Longitude: ${location.lng}`}
          </Popup>
        </Marker>
        )}
      </MapContainer>
    
  );
};

export default Map;
