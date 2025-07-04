import { useState } from 'react'
import { Star } from './Star'

const createArray = length => [...Array(length)]

export const StarRatingSystem = ({
    totalStars = 5,
    style = {},
    onRatingChange = f => f,
    selectedStars: controlledStars,
    readOnly = false
}) => {
    const [internalStars, setInternalStars] = useState(0)

    const selectedStars = controlledStars !== undefined ? controlledStars : internalStars

    console.log('StarRatingSystem rendered with', totalStars, 'stars, selectedStars:', selectedStars, 'readOnly:', readOnly)

    const handleStarSelect = (starId) => {
        if (readOnly) {
            console.log('Star click ignored - component is read-only')
            return
        }

        const newRating = starId + 1
        console.log('Star selected, new rating:', newRating)

        if (controlledStars === undefined) {
            setInternalStars(newRating)
        }

        onRatingChange(newRating)
    }

    return (
        <div style={{ padding: "5px", ...style }}>
            <h1>Star Rating System</h1>
            <div>
                {createArray(totalStars).map((n, i) => {
                    console.log('Rendering star', i, 'selected:', i < selectedStars)
                    return (
                        <Star
                            key={i}
                            starId={i}
                            selected={i < selectedStars}
                            onSelect={handleStarSelect}
                            readOnly={readOnly}
                        />
                    )
                })}
            </div>
            <p>Rating: {selectedStars} out of {totalStars} stars {readOnly ? '(Read-only)' : ''}</p>
        </div>
    )
}