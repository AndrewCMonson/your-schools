import { ReactElement, Dispatch, SetStateAction } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { locationSuccess, locationError } from "../../utils/geolocation";
import { LatLng } from "../../__generatedTypes__/graphql";

interface LocationButtonProps {
  setZipcode: Dispatch<SetStateAction<string>>;
  setSearchParams: SetURLSearchParams;
  setLocationLatLng?: Dispatch<SetStateAction<LatLng | null>>;
  size?: "sm" | "md" | "lg";
}

export const LocationButton = ({
  setZipcode,
  setSearchParams,
  setLocationLatLng,
  size = "md",
}: LocationButtonProps): ReactElement => {
  const handleUseLocationClick = (): void => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        locationSuccess(
          position,
          setSearchParams,
          setZipcode,
          setLocationLatLng,
        ),
      locationError,
    );
  };

  return (
    <button
      className={`btn btn-primary btn-${size}`}
      onClick={handleUseLocationClick}
    >
      Use My Location
    </button>
  );
};
