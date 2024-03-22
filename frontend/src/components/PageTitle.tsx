interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-center text-4xl">{title}</h1>
    </div>
  );
};

