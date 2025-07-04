import { useState } from 'react'
import { Color } from './Color'
import { AddColorForm } from './AddColorForm'

export const ColorList = ({ colors = [] }) => {
    const [colorList, setColorList] = useState(colors)

    console.log('ColorList rendered with', colorList.length, 'colors')

    const addColor = (title, color) => {
        const newColor = {
            id: Date.now(),
            title,
            color,
            rating: 0
        }
        console.log('Adding new color:', newColor)
        setColorList([...colorList, newColor])
    }

    const removeColor = (id) => {
        console.log('Removing color with id:', id)
        setColorList(colorList.filter(color => color.id !== id))
    }

    const rateColor = (id, rating) => {
        console.log('Rating color', id, 'with rating:', rating)
        setColorList(
            colorList.map(color =>
                color.id === id ? { ...color, rating } : color
            )
        )
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Color List ({colorList.length} colors)</h1>

            <AddColorForm onNewColor={addColor} />

            {colorList.length === 0 ? (
                <p>No colors yet. Add some colors above!</p>
            ) : (
                colorList.map(color => (
                    <Color
                        key={color.id}
                        title={color.title}
                        color={color.color}
                        rating={color.rating}
                        onRemove={() => removeColor(color.id)}
                        onRate={(rating) => rateColor(color.id, rating)}
                    />
                ))
            )}
        </div>
    )
} 