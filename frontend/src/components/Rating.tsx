interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  const list = [];

  for (let i = 0; i < 5; i++) {
    if (value - i >= 1) {
      list.push(
        <>
          <input
            type="radio"
            name="rating-2"
            className=" mask mask-star-2 mask-half-1"
            disabled={true}
            key={i}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            key={i + 0.5}
          />
        </>,
      );
    } else if (value - i >= 0.5) {
      list.push(
        <>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-1"
            checked
            disabled={true}
            key={i}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            key={i + 0.5}
          />
        </>,
      );
    } else {
      list.push(
        <>
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-1"
            disabled={true}
            key={i}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 mask-half-2"
            disabled={true}
            key={i + 0.5}
          />
        </>,
      );
    }
  }

  return (
    <>
      <div className="tooltip tooltip-right" data-tip="4K reviews">
        <div className="rating rating-half">{list}</div>
      </div>
    </>
  );
};
