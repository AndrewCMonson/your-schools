import { Dispatch, SetStateAction } from "react";
import { SetURLSearchParams } from "react-router-dom";

interface LocationDataProps {
  long_name: string;
  short_name: string;
  types: string[];
}

export const locationSuccess = (
  // eslint-disable-next-line no-undef
  position: GeolocationPosition,
  setSearchParams: SetURLSearchParams,
  setZipcode: Dispatch<SetStateAction<string>>,
) => {
  const { latitude, longitude } = position.coords;
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
  )
    .then((response) => response.json())
    .then((data) => {
      const zipcode = data.results[0]?.address_components.find(
        (component: LocationDataProps) =>
          component.types.includes("postal_code"),
      ).long_name;

      if (!zipcode) {
        console.log("No zipcode found");
        return;
      }
      setZipcode(zipcode);
      setSearchParams({ zipcode });
    });
};

export const locationError = () => {
  throw new Error("Geolocation not supported or permission denied");
};
