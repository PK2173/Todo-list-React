import React from 'react'

export default function Itemlist(props) {
  return (
      <h3>
        <span className="botton" onClick={()=>{props.onSelect(props.index)}}>❌ </span><span>{props.elem}</span>
      </h3>
  )
}
