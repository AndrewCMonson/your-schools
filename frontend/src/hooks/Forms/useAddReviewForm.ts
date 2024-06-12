import { AddReview, GetSchool } from "../../utils";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { FormEvent, useState, MouseEvent } from "react";

interface AddReviewFormData {
  rating: number;
  review: string;
}

interface AddReviewFormProps {
  schoolId: string | null | undefined;
  userId: string | null | undefined;
}

export const useAddReviewForm = ({ schoolId, userId }: AddReviewFormProps) => {
  const [addReviewFormData, setAddReviewFormData] = useState<AddReviewFormData>(
    {
      rating: 0,
      review: "",
    },
  );
  const [addReview] = useMutation(AddReview, {
    onCompleted: () => {
      toast.success("Review added");
    },
    onError: (e) => {
      toast.error(e.message);
      console.error(e);
    },
  });

  const handleInputChange = (
    event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target as HTMLInputElement;
    setAddReviewFormData({ ...addReviewFormData, [name]: value });
  };

  const handleAddReviewFormSubmit = async (
    event: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    if (!addReviewFormData.rating || !addReviewFormData.review) {
      toast.error("Please fill out all fields");
      return;
    }

    addReview({
      variables: {
        rating: Number(addReviewFormData.rating),
        review: addReviewFormData.review,
        schoolId: schoolId,
        owner: userId,
      },
      refetchQueries: [{ query: GetSchool, variables: { id: schoolId } }],
    });
  };

  return {
    handleInputChange,
    handleAddReviewFormSubmit,
  };
};
