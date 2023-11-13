import React from 'react';
import Country from './country';
import {v4 as uuidv4} from "uuid";
import style from "./countries.module.css";

function countries(props) {
    const countries=props.countries;
  return (
    <section className={style.countries}>
        
      {countries.map((country)=>{
        const countryNew={country,id:uuidv4()}
        return <Country  {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
      })}
    </section>
  )
}

export default countries
