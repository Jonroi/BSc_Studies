import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Star = ({
    selected = false,
    onSelect = f => f,
    starId = 0,
    readOnly = false
}) => {
    console.log('Star component rendered, selected:', selected, 'starId:', starId, 'readOnly:', readOnly)

    return (
        <FontAwesomeIcon
            icon={faStar}
            color={selected ? "red" : "grey"}
            onClick={readOnly ? undefined : () => onSelect(starId)}
            style={{
                cursor: readOnly ? 'default' : 'pointer',
                opacity: readOnly ? 0.7 : 1
            }}
        />
    )
}