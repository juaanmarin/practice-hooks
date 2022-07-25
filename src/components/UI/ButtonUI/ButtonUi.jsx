import React from 'react'

export const ButtonUi = ({styleButton, text="press", event}) => {
  return (
    <button className={styleButton} onClick={event}> {text} </button>
  )
}
