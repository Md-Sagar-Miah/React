import React,{useEffect,useState} from "react";
import Countries from "./components/countries";
import "./App.css"
import Search from "./components/Search";



function App() {
  const url="https://restcountries.com/v3.1/all";

  const [isLoading,setIsLoading]=useState(true);
  const [error,setError]=useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountry,setFilterCountry]=useState(countries);
  
  


  useEffect( ()=>{
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then(respJson => {
        setCountries(respJson);
        setFilterCountry(respJson);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      })
  },[])
  
  const handleRemoveCountry=(name)=>{
    const filter=countries.filter((country)=> {
      return country.name.common!==name
    });
    setFilterCountry(filter);
    setCountries(filter);
  }

  const handleSearch=(searchValue)=>{
    let value=searchValue.toLowerCase();
    const searchCountry=countries.filter((country)=>{
      const countryName=country.name.common.toLowerCase();
      return countryName.startsWith(value);
      
    });
    setFilterCountry(searchCountry);
  }

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h1>Loading...</h1> }
      {error && <h1>{error.message}</h1> }
      
      {countries && <Countries countries={filterCountry} onRemoveCountry={handleRemoveCountry}/> } 
    </>
  );
}

export default App;
