import React from 'react'

import './HeadingName.css'

export default function Header() {
    return (
        <div className="Header">
            <p className="Heading-Information">Country</p>
            <p className="Heading-Information">Cases</p>
            <p className="Heading-Information">Deaths</p>
            <p className="Heading-Information">Recoveries</p>
            
        </div>
    )
}