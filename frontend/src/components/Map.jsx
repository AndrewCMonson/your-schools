
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"

const GoogleMap = ({location}) => {
    const position = { lat: location.latitude, lng: location.longitude }

  return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<div className="h-1/2 w-96">
				<Map zoom={12} center={position} mapId={import.meta.env.VITE_GOOGLE_MAPS_ID} gestureHandling={'greedy'} disableDefaultUI={true}  >
                    <AdvancedMarker anchor="top" position={position}>
                        <Pin  />
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
}
export default GoogleMap