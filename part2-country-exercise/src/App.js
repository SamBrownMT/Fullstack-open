import { useState, useEffect } from 'react'
import axios from 'axios'
import Display from './Display'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])

  const handleChange = (event) => {
    console.log(filter)
    setFilter(event.target.value)
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleChange} />
      <Display filter={filter} countries={countries} />
    </div>
  );
}

export default App;
