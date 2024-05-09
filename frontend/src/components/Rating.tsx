import { Fragment } from "react/jsx-runtime";

interface RatingProps {
  value: number;
  size?: "sm" | "md" | "lg";
}

export const Rating = ({ value, size }: RatingProps) => {
  const list = [];

  for (let i = 0; i < 5; i++) {
    if (value - i >= 1) {
      list.push(
        <Fragment key={i}>
          <input
            type="radio"
            name="rating-2"
            className=" mask mask-star-2 mask-half-1"
            disabled={true}
            style={{ cursor: "default" }}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            style={{ cursor: "default" }}
          />
        </Fragment>,
      );
    } else if (value - i >= 0.5) {
      list.push(
        <Fragment key={i}>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-1"
            checked
            disabled={true}
            style={{ cursor: "default" }}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            style={{ cursor: "default" }}
          />
        </Fragment>,
      );
    } else {
      list.push(
        <Fragment key={i}>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-1"
            disabled={true}
            style={{ cursor: "default" }}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            style={{ cursor: "default" }}
          />
        </Fragment>,
      );
    }
  }

  return (
    <>
      <div className="tooltip tooltip-right" data-tip="4K reviews">
        <div className={`rating rating-half rating-${size}`}>{list}</div>
      </div>
    </>
  );
};
