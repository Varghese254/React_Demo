import React from 'react'

function Top(props) {
  return (
    <div>
       
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default Top