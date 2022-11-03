import { useState, useEffect } from 'react'
import axios from 'axios'
import PhonebookForm from './PhonebookForm'
import PhonebookDisplay from './PhonebookDisplay'
import FilterDisplay from './FilterDisplay'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebook
      .getAll()
      .then(folks => {
        console.log('promise fulfilled')
        setPersons(folks)
      })
  },[persons])

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
      name: newName,
      number: newNumber
    }
    phonebook
      .create(newPerson)
      .then(newbie => {
        setPersons(persons.concat(newbie))
      })
    
  }

  const handleDelete = (event) => {
    const toBeRemoved = event.target.value
    console.log(event.target)
    const deletee = persons.find(person => 
      person.id === parseInt(toBeRemoved));
    console.log(deletee)
    if(window.confirm(`Do you want to delete ${deletee.name}`))
      {phonebook
        .remove(toBeRemoved)
        .then(response => {
          setPersons(persons.filter(person => person != deletee))
        })
        .catch(error => {
          console.log(error)
        })
      }
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
      <PhonebookDisplay personsList={filteredPersonsList} 
      handleDelete={handleDelete}/>
    </div>
  )
}

export default App