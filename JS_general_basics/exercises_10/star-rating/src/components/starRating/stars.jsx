import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Stars = (props) => {
    const [rating, setRating] = useState(props.rating);
    const [hover, setHover] = useState(0);

    const handleClick = (rating) => {
        setRating(rating);
    }

    const ratingColor = (rating) => {
        if (hover >= rating) {
            return "#ffc107";
        }
    }
    return (
        <div>
            <FontAwesomeIcon icon={faStar} className="star" color={ratingColor(rating)} onClick={() => handleClick(rating)} onMouseEnter={() => setHover(rating)} onMouseLeave={() => setHover(0)} />
        </div>
    )
}