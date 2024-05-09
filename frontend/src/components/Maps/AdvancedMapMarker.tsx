import { useEffect, useState } from "react";
import { School } from "../../__generatedTypes__/graphql";
import { useSchoolStore } from "../../stores/";
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
  const [infoWindowShown, setInfoWindowShown] = useState<boolean>(false);
  const { school: hoveredSchool } = useSchoolStore();

  useEffect(() => {
    if (hoveredSchool?.id === school.id) {
      setInfoWindowShown(true);
    } else {
      setInfoWindowShown(false);
    }
  }, [hoveredSchool, school.id]);

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

  console.log("position", position);
  console.log(position.lat, position.lng);

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
        <Pin
          background={"#36454F"}
          borderColor={"#36454F"}
          glyphColor={"#fff"}
          scale={1.5}
        />
        {infoWindowShown && (
          <InfoWindow
            anchor={marker}
            onCloseClick={closeInfoWindow}
            position={position}
          >
            <div>
              <h1 className="text-black">{school.name}</h1>
              <p className="text-black">{school.address}</p>
              <p className="text-black">{`${school.city}, ${school.state} ${school.zipcode}`}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`}
              >
                View on Google Maps
              </a>
            </div>
          </InfoWindow>
        )}
        ;
      </AdvancedMarker>
      ;
    </>
  );
};
