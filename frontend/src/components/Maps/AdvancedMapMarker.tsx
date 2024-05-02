import { useState } from "react";
import { School } from "../../__generatedTypes__/graphql";
import {
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

type AdvancedMapMarkerProps = {
  school: School;
};
export const AdvancedMapMarker = ({ school }: AdvancedMapMarkerProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const toggleInfoWindow = () => {
    setInfoWindowShown(!infoWindowShown);
  };

  const closeInfoWindow = () => {
    setInfoWindowShown(false);
  };

  const position = {
    lat: school?.latLng?.lat || 0,
    lng: school?.latLng?.lng || 0,
  };

  return (
    <>
      <AdvancedMarker
        key={school.id}
        position={position}
        onClick={() => {
          toggleInfoWindow();
        }}
        ref={markerRef}
      >
        <Pin />
        {infoWindowShown && (
          <InfoWindow
            anchor={marker}
            onCloseClick={closeInfoWindow}
            position={position}
          >
            <div>
              <h1>{school.name}</h1>
              <p>{school.address}</p>
            </div>
          </InfoWindow>
        )}
        ;
      </AdvancedMarker>
      ;
    </>
  );
};
