import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
}

export default function Maps(props) {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=CdYVPO4tZ4uFMTubko6l"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            Country: USA <br /> 
            Currency symbol: "$"<br /> 
            Units of speed: mph, m.p.h. <br /> 
            Distance: 13,874 km from India. <br /> 
            Area: 9.834 million km² <br /> 
            Timezone: Eastern Standard Time <br /> 
      Time zone in Washington, DC, USA (GMT-5)

      {/* Country: India <br /> 
            Currency symbol: "₹"<br /> 
            Units of speed: mph, m.p.h. <br /> 
            Area: 3.287 million km² <br /> 
            India Standard Time <br/>
            Time zone in India (GMT+5:30) */}

      {/* Country: United Kingdom <br /> 
            Currency symbol: "£"<br /> 
            Units of speed: mph, m.p.h. <br /> 
            Area: 243,610 km² <br /> 
            Greenwich Mean Time <br/>
            Time zone in United Kingdom (GMT)  */}
            

          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
}