import React from "react"

function Province( props ){
    return (
        <div>
            <h2>There are four Provinces of Pakistan </h2>
            <ol>
                <li> {props.provinces[0]} </li>
                <li> {props.provinces[1]} </li>
                <li> {props.provinces[2]} </li>
                <li> {props.provinces[3]} </li>
            </ol>
        </div>
    )
}

export default Province