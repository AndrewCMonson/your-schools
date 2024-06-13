import { ChangeEvent } from "react";

interface ReviewRatingProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
}
export const ReviewRating = ({
  handleInputChange,
  size,
}: ReviewRatingProps) => {
  return (
    <div className={`rating rating-half rating-${size} -ml-2`}>
      <input type="radio" name="rating" className="rating-hidden" />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-1"
        onChange={handleInputChange}
        value={0.5}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-2"
        value={1.0}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-1"
        value={1.5}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-2"
        value={2.0}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-1"
        value={2.5}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-2"
        value={3.0}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-1"
        value={3.5}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-2"
        value={4.0}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-1"
        value={4.5}
        onChange={handleInputChange}
        defaultChecked={false}
      />
      <input
        type="radio"
        name="rating"
        className="mask mask-star-2 mask-half-2"
        value={5.0}
        defaultChecked={false}
        onChange={handleInputChange}
      />
    </div>
  );
};
