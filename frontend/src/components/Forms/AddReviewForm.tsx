import { useAddReviewForm } from "../../hooks";
import { Rating } from "../Rating";

interface AddReviewFormProps {
  schoolId: string | null | undefined;
  userId: string | null | undefined;
}

export const AddReviewForm = ({ schoolId, userId }: AddReviewFormProps) => {
  const { handleInputChange, handleAddReviewFormSubmit } = useAddReviewForm({
    schoolId,
    userId,
  });

  return (
    <div className="card shrink-0 bg-base-100 p-4 shadow-2xl min-h-96">
      <form className="flex flex-col space-y-4">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          step=".5"
          min="1"
          max="5"
          onChange={handleInputChange}
          className="rounded w-1/5 text-black text-center"
          defaultValue={0}
        />
        <Rating value={0} size="md" readonly={false} />
        <label htmlFor="review">Review</label>
        <textarea
          name="review"
          id="review"
          onChange={handleInputChange}
          className="max-h-48 rounded min-h-48 text-black p-2"
        ></textarea>
        <button
          onClick={handleAddReviewFormSubmit}
          className="btn btn-primary btn-sm"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};
