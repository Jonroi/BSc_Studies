export const Color = ({
    title,
    color,
    rating = 0,
    onRemove = f => f,
    onRate = f => f
}) => {
    console.log('Color component rendered:', title, color, 'rating:', rating)

    return (
        <section style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <h1>{title}</h1>
            <div
                style={{
                    height: '50px',
                    backgroundColor: color,
                    border: '1px solid #000'
                }}
            />
            <div style={{ margin: '10px 0' }}>
                <StarRating
                    starsSelected={rating}
                    onRate={onRate}
                />
            </div>
            <button
                onClick={onRemove}
                style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer'
                }}
            >
                Remove
            </button>
        </section>
    )
}

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
    console.log('StarRating rendered with', starsSelected, 'selected stars')

    return (
        <div>
            {[...Array(totalStars)].map((n, i) => (
                <span
                    key={i}
                    style={{
                        cursor: 'pointer',
                        color: i < starsSelected ? '#ffcc00' : '#ccc',
                        fontSize: '20px'
                    }}
                    onClick={() => onRate(i + 1)}
                >
                    ★
                </span>
            ))}
            <p>Rating: {starsSelected} out of {totalStars} stars</p>
        </div>
    )
} 