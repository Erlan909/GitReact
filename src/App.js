import React, { useState } from 'react'
import Form from './component/Form/Form'
import Output from './component/Output/Output'
import { URL } from './config'
import './App.css';

export default function App() {
  const [data, setData] = React.useState('erlan 909')
  const [val, setVal] = React.useState(null)

  const searchByGit = async (event) =>{
    event.preventDefault()
    let url = URL+val
    const res = await fetch(url)
    const req = await res.json()
    console.log(req);
    setData(req)
  }
  return (
    <div>

      <Form
      val={val}
      setVal={setVal}
      search={searchByGit}
      />
      <Output data={data}/>

    </div>
  );
}

