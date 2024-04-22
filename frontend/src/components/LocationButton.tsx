import { ReactElement, Dispatch, SetStateAction } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { locationSuccess, locationError } from "../utils/geolocation";

interface LocationButtonProps {
  setZipcode: Dispatch<SetStateAction<string>>;
  setSearchParams: SetURLSearchParams;
}

export const LocationButton = ({
  setZipcode,
  setSearchParams,
}: LocationButtonProps): ReactElement => {
  const handleUseLocationClick = (): void => {
    navigator.geolocation.getCurrentPosition(
      (position) => locationSuccess(position, setSearchParams, setZipcode),
      locationError,
    );
  };

  return (
    <button className="btn btn-primary" onClick={handleUseLocationClick}>
      Use My Location
    </button>
  );
};
