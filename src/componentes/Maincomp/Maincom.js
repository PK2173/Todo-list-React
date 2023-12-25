import React, { useState } from "react";
import './maincom.css'
import Itemlist from "../todolistar/Todolis";

export default function App() {
  const [listitem, setlistitem] = useState([]);
  const [temp, settemp] = useState('')
  const addlist = (valueofe)=>{
    if (valueofe === 'insert') {
      setlistitem([...listitem,temp])
      settemp("")
    }else{
      setlistitem((listitem.filter((e,place)=>{
        return place !== valueofe
      })))
    }
  }
  return (
    <div className="container">
      <div className="maincontainer">
        <div className="header">ToDo List</div>
        <div   className="userinput">
          <input type="text" placeholder="Add a Items" onChange={(e)=>{settemp(e.target.value)}} value={temp}/>
          <span onClick={(e)=>{addlist('insert')}}>📥</span>
        </div>
        <div className="listitem">
        {/* {listitem.map((e,index)=>{
          return(
          <h3>
            <span className="botton" onClick={()=>{addlist(index)}}>❌ </span><span>{e}</span>
          </h3>
          )
        })} */}
        {listitem.map((elem,index)=>{
          return <Itemlist key={index} elem={elem} index={index} onSelect={addlist} />
        })}
        </div>
      </div>
    </div>
  );
}
