import { useState, useEffect } from 'react'
import axios from 'axios'
import PhonebookForm from './PhonebookForm'
import PhonebookDisplay from './PhonebookDisplay'
import FilterDisplay from './FilterDisplay'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    const duplicate = persons.findIndex((person) => {
      return person.name === newName
    });
    if(duplicate !== -1){
      return(alert(`${newName} is already taken` ))
    }
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
  }

  const handleNameChange = (event) => {
    console.log(newName)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(newNumber)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(filter)
    setFilter(event.target.value)
  }

  const filteredPersonsList = persons.filter(person => {
    return person.name.toLowerCase().includes(filter)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterDisplay filter={filter} 
      handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PhonebookForm handleSubmit={handleSubmit} newName={newName}
        handleNameChange={handleNameChange} newNumber={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <PhonebookDisplay personsList={filteredPersonsList}/>
    </div>
  )
}

export default App