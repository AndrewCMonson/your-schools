import { Review as ReviewType } from "../__generatedTypes__/graphql";
import { Rating } from "./Rating";

export const Review = ({ review, owner, rating }: ReviewType) => {
  return (
    <div className="border border-transparent border-b-black">
      <h3 className="text-xl">{owner?.username}</h3>
      <Rating value={rating ?? 0} size="sm" />
      <p>{review}</p>
    </div>
  );
};
