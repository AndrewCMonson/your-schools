import { HTMLAttributes } from "react";

interface PageTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl">{title}</h1>
    </div>
  );
};
