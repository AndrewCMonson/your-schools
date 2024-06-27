import { useAddReviewForm } from "../../hooks";
import { ReviewRating } from "../ReviewRating";

interface AddReviewFormProps {
  schoolId: string | null | undefined;
  userId: string | null | undefined;
}

export const AddReviewForm = ({ schoolId, userId }: AddReviewFormProps) => {
  const { handleInputChange, handleAddReviewFormSubmit, addReviewFormData } =
    useAddReviewForm({
      schoolId,
      userId,
    });

  return (
    <div className="card shrink-0 bg-base-100 p-4 shadow-2xl min-h-96">
      <h2 className="text-2xl">Leave a Review!</h2>
      <form className="flex flex-col space-y-2">
        <label>Rating</label>
        <ReviewRating handleInputChange={handleInputChange} size="md" />
        <label>Review</label>
        <textarea
          name="review"
          id="review"
          onChange={handleInputChange}
          className="max-h-48 rounded min-h-48 text-black p-2 border-primary border-2"
          value={addReviewFormData.review}
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
