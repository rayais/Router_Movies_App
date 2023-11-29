import React, { useState } from 'react'
import Movie_card from './Movie_card'
import { Button } from 'react-bootstrap'

function FilterRate({movies}) {
    const [rat,setrat]=useState("")
    const [fMov,setfMov]=useState([])
    
    console.log(rat)
    const filterr=()=>{
        setfMov(movies.filter((m)=>m.rating>rat))
        
        }
  return (
    <>
    <div>
    <select value={rat} onChange={(e)=>setrat(e.target.value)} >
  <option value='1'>+1</option>
  <option value='2'>+2</option>
  <option value="3">+3</option>
  <option value="4">+4</option>
</select>
        <Button variant="primary" onClick={filterr} style={{}}>
        Serch
      </Button>
    </div>
    
    <div style={{display:"flex",justifyContent: "space-around"}} >
        {fMov.map((mo, index)=>
              (<Movie_card props={mo} key={index}/>)
        )}
    </div>
    </>
  )
}

export default FilterRate