import { Review as ReviewType } from "../__generatedTypes__/graphql";
import { Rating } from "./Rating";

export const Review = ({ review, owner, rating, createdAt }: ReviewType) => {
  return (
    <div className="border border-transparent border-b-black border-2 pb-4">
      <h3 className="text-xl">{owner?.username}</h3>
      <p>{createdAt}</p>
      <Rating value={rating ?? 0} size="sm" readonly={true} />
      <p>{review}</p>
    </div>
  );
};
