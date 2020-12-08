import React from "react"

function Province( props ){
    return (
        <div>
            <h2>There are four Provinces of Pakistan </h2>
            <ol>
                <li> {props.province_name} </li>
            </ol>
        </div>
    )
}

export default Province