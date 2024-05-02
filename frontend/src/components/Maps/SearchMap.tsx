import { School, LocationInfo, LatLng } from "../../__generatedTypes__/graphql";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { AdvancedMapMarker } from "./";
import { useSearchMap } from "../../hooks/useSearchMap";
import "./SearchMap.css";

interface SearchMapProps {
  schools: School[];
  locationInfo: LocationInfo;
  locationLatLng?: LatLng | null;
}

export const SearchMap = ({
  schools,
  locationInfo,
  locationLatLng,
}: SearchMapProps) => {
  const { bounds, cameraProps, handleCameraChange } = useSearchMap({
    locationInfo,
    locationLatLng,
  });

  return (
    <div className="min-h-full h-full">
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div className="min-h-full h-full">
          <Map
            {...cameraProps}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
            gestureHandling={"cooperative"}
            disableDefaultUI={true}
            onCameraChanged={handleCameraChange}
            defaultBounds={{
              north: bounds?.northeast?.lat || 0,
              south: bounds?.southwest?.lat || 0,
              east: bounds?.northeast?.lng || 0,
              west: bounds?.southwest?.lng || 0,
            }}
            style={{ border: "none!important" }}
            id="searchMap"
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
