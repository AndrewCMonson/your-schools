interface FooterProps {
  dataTheme: string;
}

export const Footer = ({ dataTheme }: FooterProps) => {
  return (
    <footer
      className="flex flex-col xs:flex-row items-center justify-between py-6 bg-base-200"
      data-theme={dataTheme}
    >
      <p color="blue-gray" className="font-normal xs:ml-4 flex items-center">
        &copy; {new Date().getFullYear()} YourSchools
      </p>
      <ul className="flex flex-col xs:flex-row flex-wrap justify-end items-center gap-x-8 mr-4">
        <li>
          <a href="#" color="blue-gray" className="">
            About Us
          </a>
        </li>

        <li>
          <a
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};
