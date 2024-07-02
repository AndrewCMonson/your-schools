import { Fragment } from "react/jsx-runtime";

interface RatingProps {
  value: number;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
}

export const Rating = ({ value, size, readonly }: RatingProps) => {
  const getStarClasses = (index: number, half: boolean) => {
    if (index <= value || (!half && index === Math.ceil(value))) {
      return `mask mask-star-2 ${half ? "mask-half-2" : "mask-half-1"}`;
    }
    return `bg-base-200 mask mask-star-2 ${half ? "mask-half-2" : "mask-half-1"}`;
  };

  const getStarInputs = () => {
    const inputs = [];
    for (let i = 1; i <= 5; i++) {
      inputs.push(
        <Fragment key={i}>
          <input
            type="radio"
            name="rating-10"
            className={`${getStarClasses(i, false)}`}
            checked={i === Math.ceil(value) && value % 1 !== 0}
            style={{ cursor: "default" }}
            readOnly={readonly}
          />
          <input
            type="radio"
            name="rating-10"
            className={`${getStarClasses(i, true)}`}
            checked={i === Math.ceil(value) && value % 1 === 0}
            style={{ cursor: "default" }}
            readOnly={readonly}
          />
        </Fragment>,
      );
    }
    return inputs;
  };

  return (
    <>
      <div className="tooltip tooltip-right" data-tip={value.toFixed(1)}>
        <div className={`rating rating-half rating-${size}`}>
          {getStarInputs()}
        </div>
      </div>
    </>
  );
};
