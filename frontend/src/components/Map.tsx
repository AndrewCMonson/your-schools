import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

interface GoogleMapProps {
  location: {
    name: string | null | undefined;
    address: string | null | undefined;
    latitude: number | null | undefined;
    longitude: number | null | undefined;
  };
}

export const GoogleMap = ({ location }: GoogleMapProps) => {
  const position = { lat: location.latitude, lng: location.longitude };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="h-full w-full">
        <Map
          zoom={12}
          center={
            position
              ? { lat: position.lat || 0, lng: position.lng || 0 }
              : undefined
          }
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <AdvancedMarker
            position={
              position
                ? { lat: position.lat || 0, lng: position.lng || 0 }
                : undefined
            }
          >
            <Pin />
            <InfoWindow>
              <div>
                <h1>{location.name}</h1>
                <p>{location.address}</p>
              </div>
            </InfoWindow>
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};
