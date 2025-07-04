import { useState } from 'react'

export const AddColorForm = ({ onNewColor = f => f }) => {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('#000000')

    console.log('AddColorForm rendered, title:', title, 'color:', color)

    const submit = (e) => {
        e.preventDefault()
        console.log('Form submitted with title:', title, 'color:', color)

        if (title.trim() && color) {
            onNewColor(title.trim(), color)
            setTitle('')
            setColor('#000000')
        }
    }

    return (
        <form onSubmit={submit} style={{ margin: '20px', padding: '20px', border: '2px solid #ddd' }}>
            <h2>Add New Color</h2>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="title">Color Title:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter color name..."
                    required
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="color">Color:</label>
                <input
                    id="color"
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={{ marginLeft: '10px', padding: '5px' }}
                />
            </div>
            <button
                type="submit"
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    cursor: 'pointer'
                }}
            >
                Add Color
            </button>
        </form>
    )
} 