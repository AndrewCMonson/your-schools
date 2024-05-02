import {
  APIProvider,
  Map,
  MapCameraProps,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { School } from "../../__generatedTypes__/graphql";
import { AdvancedMapMarker } from "./AdvancedMapMarker";
import { useState, useCallback } from "react";
import "./SchoolMap.css";

interface SchoolMapProps {
  school: School;
}

export const SchoolMap = ({ school }: SchoolMapProps) => {
  const { lat, lng } = school?.latLng || {};

  const initialCameraProps = {
    center: { lat: lat || 0, lng: lng || 0 },
    zoom: 13,
  };

  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(initialCameraProps);

  const handleCameraChange = useCallback(
    (ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
    [],
  );

  return (
    <div className="m-4 h-full rounded">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="h-full w-full border rounded-md">
          <Map
            {...cameraProps}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            onCameraChanged={handleCameraChange}
          >
            <AdvancedMapMarker school={school} key={school.id} />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};
