import { Link } from "react-router-dom";

const FourOhFourScreen = () => {
  return (
    <>
      <section
        id="fourOhFourScreen"
        className="flex flex-col items-center overflow-auto w-100 pt-5"
      >
        <h1 className="text-6xl text-indigo-800 font-bold">404</h1>
        <h2 className="text-2xl text-center">
          We&apos;re sorry, but the page you&apos;re trying to access
          doesn&apos;t exist.
        </h2>
        <Link to="/" className="text-indigo-800 underline">
          Return Home
        </Link>
      </section>
    </>
  );
};
export default FourOhFourScreen;
