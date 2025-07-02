export default function UnorderedList() {
    const sqlsThreats = [
        'SQL Injection',
        'Broken Authentication',
        'Sensitive Data Exposure',
        'XML External Entities (XXE)',
        'Broken Access Control'
    ]

    const ul = document.createElement('ul')

    sqlsThreats.map((threat, idx) => {
        const li = document.createElement('li')
        li.textContent = threat
        li.className = 'single-threat'
        li.setAttribute('key', idx)
        ul.appendChild(li)
    })

    const ref = node => {
        if (node && !node.firstChild) {
            node.appendChild(ul)
        }
    }

    return <div ref={ref}></div>
}
