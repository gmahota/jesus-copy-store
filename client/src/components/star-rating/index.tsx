import React, {useState} from "react";
import StarRatings from "react-star-ratings";
import {getColor} from "functions/colors";

export type RatingProps = {initialRating: number; numberOfStars: number};

const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  numberOfStars = 5,
}) => {
  const [rating, setRating] = useState(initialRating);
  return (
    <StarRatings
      rating={rating}
      starRatedColor={getColor("yellow-500")}
      starEmptyColor={getColor("gray-300")}
      starHoverColor={getColor("gray-400")}
      starDimension="16px"
      starSpacing="3px"
      changeRating={setRating}
      numberOfStars={numberOfStars}
      name="stars"
    />
  );
};

export default Rating;
