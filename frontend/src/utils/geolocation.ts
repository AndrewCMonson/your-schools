

/*
  This file is used for the success and error functions of the geolocation feature.

  function success(position: GeolocationPosition) {
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
        console.log(zipcode);
        navigate(`/schools?zipcode=${zipcode}`);
      });
  }

  function error() {
    throw an error here that causes a modal to pop up telling the client that their browser does not support geolocation.
    console.log("No location found");
  }

*/