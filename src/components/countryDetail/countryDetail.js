import React from 'react'
import ReactCountryFlag from 'react-country-flag'

import "./countryDetails.css"


export default function countryDetails(props) {
    return (
        <div className="countryDetails">
            <div className="country-icon">
                
            <ReactCountryFlag
                className="country-flag"
                countryCode={props.countryCode}
                svg
                style={{
                    width: '3.5em',
                    height: '3.5m',
                }}
                title={props.countryCode}
            />

            </div>

            <div className="cases-details">
                <div className="cases-box Cases">
                    <span>{props.totalCase}</span>
                    <p className="yesterday">Last 24 hours: <strong>{props.newCase}</strong></p>
                </div>
                <div className="cases-box Deaths">
                <span>{props.totalDeaths}</span>
                    <p className="yesterday">Last 24 hours: <strong>{props.newDeaths}</strong></p>
                </div>
                <div className="cases-box Recovered">
                <span>{props.totalRecovered}</span>
                    <p className="yesterday">Last 24 hours: <strong>{props.newRecovered}</strong></p>
                </div>
            </div>
                        
        </div>
    )
}
