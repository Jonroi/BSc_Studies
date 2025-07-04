import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const StarRatingSystem = () => {
    return (
        <div>
            <h1>Star Rating System</h1>
            <div>
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="grey" />
                <FontAwesomeIcon icon={faStar} color="grey" />
            </div>
        </div>
    )
}