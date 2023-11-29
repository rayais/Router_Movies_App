import React, { useState } from 'react'
import Movie_card from './Movie_card'
import { Button } from 'react-bootstrap'

function FilterName({movies}) {
    const [serchingTitle,setserchingTitle]=useState("")
    const [fMov,setfMov]=useState([])
    
    const filterr=()=>{
        setfMov(movies.filter((m)=>m.title.toUpperCase().includes(serchingTitle.toUpperCase())))
        console.log(fMov)
        
        }
  return (
    <>
    <div>
        <input placeholder='Put the titel' onChange={(e)=>setserchingTitle(e.target.value)}/>
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

export default FilterName