import React from 'react'
import {useParams} from "react-router-dom"

export default function Training() {
    let {id}= useParams()
    return (
        <React.Fragment>
            <h2>Aqui estan los ejercicios de :{id} </h2>
        </React.Fragment>
    )
}
