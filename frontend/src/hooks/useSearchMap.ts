import { useCallback, useEffect, useState } from "react";
import {
  MapCameraChangedEvent,
  MapCameraProps,
} from "@vis.gl/react-google-maps";
import { LatLng, LocationInfo } from "../__generatedTypes__/graphql";

interface UseSearchMapProps {
  locationInfo: LocationInfo;
  locationLatLng?: LatLng | null;
}

export const useSearchMap = ({
  locationInfo,
  locationLatLng,
}: UseSearchMapProps) => {
  const { lat, lng } = locationInfo.location || {};
  const bounds = locationInfo?.bounds;

  const initialCameraProps = {
    center: {
      lat: lat || 0,
      lng: lng || 0,
    },
    zoom: 12,
  };

  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(initialCameraProps);

  useEffect(() => {
    if (locationLatLng) {
      setCameraProps({
        center: {
          lat: locationLatLng.lat || 0,
          lng: locationLatLng.lng || 0,
        },
        zoom: 12,
      });
    }

    if (locationInfo) {
      setCameraProps({
        center: {
          lat: locationInfo.location?.lat || 0,
          lng: locationInfo.location?.lng || 0,
        },
        zoom: 12,
      });
    }
  }, [locationLatLng, locationInfo]);

  const handleCameraChange = useCallback(
    (ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
    [],
  );

  return {
    bounds,
    cameraProps,
    handleCameraChange,
  };
};
