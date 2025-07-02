export default function ThreatList({ sqlThreats }) {
    return (
        <ul>
            {sqlThreats.map((threat, idx) => (
                <li className='single-threat' key={idx}>{threat}</li>
            ))}
        </ul>
    )
}
