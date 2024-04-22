// This button currently doesn't work properly. When pressed, it updates the url params, but the page doesn't update.
// It should update the url params and then redirect to the /schools page.

import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

type LocationDataProps = {
  long_name: string;
  short_name: string;
  types: string[];
};

export const UseLocationButton = ({ setZipcode }): ReactElement => {
  const navigate = useNavigate();

  const handleUseLocationClick = (): void => {
    // console.log(navigator.geolocation);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }`,
        )
          .then((response) => response.json())
          .then((data) => {
            const zipcode = data.results[0]?.address_components.find(
              (component: LocationDataProps) =>
                component.types.includes("postal_code"),
            ).long_name;

            if (!zipcode) {
              // navigate("/schools");
              console.log("No zipcode found");
              return;
            }
            setZipcode(zipcode);
            console.log(zipcode);
            navigate(`/schools?zipcode=${zipcode}`);
          });
      });
    } else {
      // navigate("/schools");
      console.log("No location found");
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleUseLocationClick}>
      Use My Location
    </button>
  );
};
