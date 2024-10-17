import { HiOutlineStar } from "react-icons/hi2";

function RatingStars({ ratingVal, color = "" }) {
  return (
    <div className="flex items-center justify-start gap-1">
      {Array.from({ length: 5 }).map((val, index) => (
        <span key={index}>
          <HiOutlineStar
            fill={index < ratingVal ? (color ? color : "#000") : "#fefefe"}
            stroke={color ? color : "#000"}
          />
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
