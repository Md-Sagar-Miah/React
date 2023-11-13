import React ,{useEffect, useState } from 'react';


function Search(props) {
    const [searchCountry,setSesrchCountry]=useState("");

    const handleChange=(e)=>{
        setSesrchCountry(e.target.value);
    
    }

    useEffect(()=>{
        props.onSearch(searchCountry);
    }, [searchCountry])

  return (
    <div style={{textAlign:"center"}}>
      <input type="text"  value={searchCountry} placeholder="Search Country " onChange={handleChange} />
    </div>
  )
}

export default Search
