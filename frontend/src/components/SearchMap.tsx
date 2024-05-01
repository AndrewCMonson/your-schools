import { useEffect, useState } from "react";
import { School, LatLng } from "../__generatedTypes__/graphql";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

interface SearchMapProps {
  schools: School[];
}

const SearchMap = ({ schools }: SearchMapProps) => {
  const [arrayOfLatLongs, setArrayOfLatLongs] = useState<LatLng[]>([]);

  useEffect(() => {
    if (schools.length > 0) {
      const latLongs = schools.map((school) => {
        return {
          lat: school?.latLng?.lat,
          lng: school?.latLng?.lng,
        };
      });
      setArrayOfLatLongs(latLongs);
    }
  }, [schools]);

  console.log(arrayOfLatLongs);

  return (
    <div>
      <button>Get Lat Longs</button>
    </div>
  );
};
export default SearchMap;
