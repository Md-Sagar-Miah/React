import React from 'react';
import style from "./country.module.css";

function country(props) {
  const {name,flags,capital,population,area}=props.country;


  return (
    <article className={style.country }>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag}/>
        <h2>Name:{name.common}</h2>
        <h3>Capital:{capital} </h3>
        <h3>Population:{population} </h3>
        <h3>Area:{area} </h3>
        <button onClick={()=>{
          return props.onRemoveCountry(name.common);
        }} className={style.btn}>Remove Country</button>
      </div>
    </article>
  )
}

export default country
