import { ReactElement } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { SearchBar } from "../components";

type LDataProps = {
  long_name: string;
  short_name: string;
  types: string[];
};

export const HomeScreen = (): ReactElement => {
  const navigate = useNavigate();

  const handleUseLocationClick = (): void => {
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
              (component: LDataProps) =>
                component.types.includes("postal_code"),
            ).long_name;

            if (!zipcode) {
              navigate("/schools");
              return;
            }
            navigate(`/schools?zipcode=${zipcode}`);
          });
      });
    } else {
      navigate("/schools");
    }
  };

  return (
    <>
      <div
        className="hero min-h-full"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dggz0jK/cdc-8-LITu-Yk-ZRIo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-lg lg:max-w-xl">
            <h1 className="mb-5 text-5xl md:text-7xl lg:text-8xl font-bold">
              YourSchools
            </h1>
            <p className="mb-5 text-base md:text-lg">
              Built by parents for parents. YourSchools gives you complete
              control over your child&apos;s education
            </p>
            <button className="btn btn-md btn-primary md:btn-lg">
              <Link to="/signup" className="text-base md:text-lg">
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
