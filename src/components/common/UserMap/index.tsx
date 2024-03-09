import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useAssessmentContext } from "../../../context";
import { IRandomUser } from "../../../utils/types";

const MapWithFlags = ({ locations }) => {
  const center: any = [33.6461824, 73.1668406];
  const { state } = useAssessmentContext();

  const activeUser = state.activeUser as IRandomUser;
  return (
    <div className="h-[80vh] w-full overflow-hidden pb-1">
      <MapContainer
        center={center as unknown as any}
        zoom={13}
        scrollWheelZoom={true}
        style={{ minHeight: "100%", minWidth: "100%" }}
      >
        <TileLayer url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>
            <div>
              <h2 className="font-bold text-xl">
                {activeUser.name.first} {activeUser.name.last}
              </h2>
              <p className="mt-1">
                For some reason, the random user coordinates aren't working as
                expected
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithFlags;
