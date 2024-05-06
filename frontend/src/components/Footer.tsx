import { ReactElement } from "react";
import { Typography } from "@material-tailwind/react";

interface FooterProps {
  dataTheme: string;
}

export const Footer = ({ dataTheme }): ReactElement => {
  return (
    <footer
      className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-6 text-center md:justify-between container mx-auto z-50 bg-base-200"
      data-theme={dataTheme}
    >
      <Typography color="blue-gray" className="font-normal 3xl:ml-4">
        &copy; {new Date().getFullYear()} YourSchools
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 3xl:mr-4">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>

        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
};
