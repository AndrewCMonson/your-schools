import { School, LocationInfo } from "../../__generatedTypes__/graphql";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { AdvancedMapMarker } from "./";

interface SearchMapProps {
  schools: School[];
  locationInfo: LocationInfo;
}

const SearchMap = ({ schools, locationInfo }: SearchMapProps) => {
  const mapCenter = locationInfo?.location;

  return (
    <div className="min-h-full h-full">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="min-h-full h-full">
          <Map
            zoom={13}
            center={
              locationInfo
                ? { lat: mapCenter?.lat || 0, lng: mapCenter?.lng || 0 }
                : undefined
            }
            mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            {schools.map((school) => {
              return <AdvancedMapMarker school={school} key={school.id} />;
            })}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};
export default SearchMap;
