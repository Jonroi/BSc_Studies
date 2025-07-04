import { useState } from 'react'
import { StarRatingSystem } from './StarRatingSystem'

export const RatingApp = () => {
    const [productRating, setProductRating] = useState(0)
    const [serviceRating, setServiceRating] = useState(0)
    const [overallRating, setOverallRating] = useState(0)

    console.log('RatingApp rendered - Product:', productRating, 'Service:', serviceRating, 'Overall:', overallRating)

    const handleProductRating = (rating) => {
        console.log('Product rating changed to:', rating)
        setProductRating(rating)
        calculateOverallRating(rating, serviceRating)
    }

    const handleServiceRating = (rating) => {
        console.log('Service rating changed to:', rating)
        setServiceRating(rating)
        calculateOverallRating(productRating, rating)
    }

    const calculateOverallRating = (product, service) => {
        const overall = Math.round((product + service) / 2)
        console.log('Calculated overall rating:', overall)
        setOverallRating(overall)
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Customer Feedback System</h1>

            <div style={{ marginBottom: '20px' }}>
                <h2>Product Quality</h2>
                <StarRatingSystem
                    totalStars={5}
                    onRatingChange={handleProductRating}
                    style={{ backgroundColor: '#f0f8ff', padding: '10px', borderRadius: '5px' }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Service Quality</h2>
                <StarRatingSystem
                    totalStars={5}
                    onRatingChange={handleServiceRating}
                    style={{ backgroundColor: '#f0fff0', padding: '10px', borderRadius: '5px' }}
                />
            </div>

            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff8dc', borderRadius: '5px' }}>
                <h2>Overall Rating</h2>
                <StarRatingSystem
                    totalStars={5}
                    selectedStars={overallRating}
                    readOnly={true}
                    style={{ backgroundColor: 'transparent' }}
                />
                <p><strong>Average: {overallRating}/5 stars</strong></p>
            </div>
        </div>
    )
} 