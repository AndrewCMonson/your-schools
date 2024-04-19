import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../components";

type LDataProps = {
  long_name: string;
  short_name: string;
  types: string[];
};

export const HomeScreen = (): ReactElement => {
  const navigate = useNavigate();
  // const [searchZipcode, setSearchZipcode] = useState<string>("");

  // const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const target = event.target as HTMLFormElement;
  //   const zipcode = target.zipcode.value;

  //   if (!zipcode) {
  //     toast.error("Please enter a valid zipcode");
  //     return;
  //   }

  //   navigate(`/schools?zipcode=${zipcode}`);
  // };

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
      <section id="homeScreen" className="flex justify-end h-full w-100">
        <div className="flex flex-col justify-center p-8 lg:w-1/2 bg-white rounded-2xl m-8 container">
          <div className="container mx-auto">
            <h1 className="text-center text-4xl sm:text-6xl 2xl:text-8xl  mb-4">
              Welcome to{" "}
              <span className="text-indigo-800 font-bold italic">
                Your Schools
              </span>
            </h1>
            <p className="text-center sm:text-2xl text-lg 2xl:text-3xl">
              <span className="font-bold">High quality</span>, trusted
              preschools and daycares in your area
            </p>
          </div>
          <SearchBar />
          <div>
            <div className="container mx-auto flex flex-row justify-center mt-4">
              <p className="text-center text-2xl">
                <span className="font-bold">OR</span>
              </p>
            </div>
            <div className="container mx-auto flex flex-row justify-center mt-4">
              <button
                className="btn btn-primary"
                onClick={handleUseLocationClick}
              >
                Use Your Location
              </button>
            </div>
          </div>
          <div className="w-1/2 self-center mt-4">
            <p className="text-center text-sm">
              <span className="font-bold">Note:</span> Using your location will
              prompt your browser to ask for permission to use your location
              data.
            </p>
          </div>
          <div className=" xs:h-1/3 h-1/2 w-1/2 text-center flex flex-col justify-center self-center">
            <h1 className="text-center text-2xl text-indigo-800">
              <span className="font-bold">About Us</span>
            </h1>
            <p className="text-center text-sm sm:text-base 3xl:text-lg mt-6">
              Founded by parents, for parents. We understand the struggle of
              finding childcare that is both affordable and high quality. Our
              platform allows you to see the full picture, including photos,
              tuition, and more. We are here to help you make the best decision
              for your family.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
