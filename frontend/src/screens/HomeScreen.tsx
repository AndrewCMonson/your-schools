import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const HomeScreen = (): ReactElement => {
  return (
    <>
      <div
        className="hero min-h-full"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dggz0jK/cdc-8-LITu-Yk-ZRIo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center">
          <div className="max-w-md md:max-w-lg lg:max-w-xl homepage-hero">
            <h1 className="mb-5 text-5xl md:text-7xl lg:text-8xl font-bold">
              YourSchools
            </h1>
            <p className="mb-5 md:text-lg">
              Built by parents for parents. YourSchools gives you complete
              control over your child&apos;s education
            </p>

            <Link to="/signup" className="text-base md:text-lg">
              <button className="btn btn-md md:btn-lg">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
