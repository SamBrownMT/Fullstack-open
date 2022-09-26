import { useState } from 'react'
import CountryDisplay from './CountryDisplay'

const Display = (props) => {
  const [showCountry, setShowCountry] = useState(false)
  const [currentCountry, setCurrentCountry] = useState('')

  const filteredCountries = props.countries.filter(country => {
    return country.name.common.toLowerCase().includes(props.filter)
  })

  const filteredCountry = props.countries.filter(country => {
    return country.name.common.includes(currentCountry)
  })[0]

  console.log(filteredCountries.length)

  const handleViewClick = (event) => {
    if(event.target.value === currentCountry) {
    setShowCountry(!showCountry)}
    else {setShowCountry(true)};
    setCurrentCountry(event.target.value)
  }

  if(filteredCountries.length > 10){
    return <p>Too many matches, specify another filter</p>
  }
  else if(filteredCountries.length > 1){
    return(
      <>
      {filteredCountries.map((country) => {
        return (
          <>
            <p key={country.cca2}>{country.name.common}</p>
            <button key={country.cca3} onClick={handleViewClick}
              value={country.name.common}>view</button>
          </>
          )
      })}
      {showCountry ? <CountryDisplay 
        country={filteredCountry} /> : <br/>}
      </>
    )
  }
  else if(filteredCountries.length === 1) {
    const country = filteredCountries[0]
    return(
      <CountryDisplay country={country}/>
    )
  }

}

export default Display