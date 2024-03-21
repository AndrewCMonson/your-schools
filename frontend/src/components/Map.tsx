import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

interface GoogleMapProps {
  location: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
}

export const GoogleMap = ({ location }: GoogleMapProps) => {
  const position = { lat: location.latitude, lng: location.longitude };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="h-full w-full">
        <Map
          zoom={12}
          center={position}
          mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={position}>
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
