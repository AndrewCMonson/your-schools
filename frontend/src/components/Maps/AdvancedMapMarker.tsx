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

  const fullSchoolAddress = `${school.address}, ${school.city}, ${school.state} ${school.zipcode}`;

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
              <h1 className="text-black font-bold text-lg">{school.name}</h1>
              <p className="text-black">{school.address}</p>
              <p className="text-black">{`${school.city}, ${school.state} ${school.zipcode}`}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${school.name},${fullSchoolAddress}`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-500"
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
