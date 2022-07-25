import React from 'react'
import "./InputUI.css"

export const InputUI = ({event}) => {
  return (
        <div className="form-group">
            <input type="text" onChange={event} className="form-input" placeholder=" "></input>
            <label for="name" className="form-label">Nombre:</label>
        </div>
  )
}
