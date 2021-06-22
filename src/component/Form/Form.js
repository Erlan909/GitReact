import React from 'react'

export default function Form({val, setVal, search}) {
    return (
        <div>
           <form onSubmit={search}>
           <input value={val} onChange={(e)=>{
               setVal(e.target.value)
           }}/>
          
        </form>
        </div>
    )
}