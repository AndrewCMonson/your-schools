import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  value: number | null | undefined;
}

export const Rating = ({ value }: RatingProps) => {
  return (
    <div className="rating flex">
      <span>
        {value ?? 0 >= 1 ? (
          <FaStar />
        ) : value ?? 0 >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value ?? 0 >= 2 ? (
          <FaStar />
        ) : value ?? 0 >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value ?? 0 >= 3 ? (
          <FaStar />
        ) : value ?? 0 >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value ?? 0 >= 4 ? (
          <FaStar />
        ) : value ?? 0 >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value ?? 0 >= 5 ? (
          <FaStar />
        ) : value ?? 0 >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    </div>
  );
};
