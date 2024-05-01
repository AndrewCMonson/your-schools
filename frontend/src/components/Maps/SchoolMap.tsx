import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { School } from "../../__generatedTypes__/graphql";
import { AdvancedMapMarker } from "./AdvancedMapMarker";

interface SchoolMapProps {
  school: School;
}

export const SchoolMap = ({ school }: SchoolMapProps) => {
  const { lat, lng } = school?.latLng || {};

  return (
    <div className="m-4 h-full rounded">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="h-full w-full border rounded-md">
          <Map
            zoom={12}
            center={school ? { lat: lat || 0, lng: lng || 0 } : undefined}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <AdvancedMapMarker school={school} key={school.id} />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};
