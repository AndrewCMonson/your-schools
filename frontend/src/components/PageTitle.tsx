interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center text-4xl">{title}</h1>
    </div>
  );
};
export default PageTitle;
