import React, { useEffect, useState} from 'react'
import axios from 'axios'

const FilterCountries = (props) => {
  return(
    <ul>
      {props.countries.map(country => 
        <Country key={country.name} country={country} />
      )}
    </ul>
  )

}

const Country = ({country}) => {
  return (
      <li> {country.name}</li>
  )
  
}

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <FilterCountries countries={countries}/>
    </div>
  );
}

export default App
