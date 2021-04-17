import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayForm = (props) => {
  return(
  <form onSubmit={props.addName}>
        <div>
          name: <input 
            value={props.newName}
            onChange={props.handleNameChange}
            />
        </div>
        <div>
          number: <input 
            value={props.newNumber}
            onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )

}

const Display = (props) => {
  return(
    <ul>
        {props.display.map(person =>
          <Person key={person.name} person={person} />
          )}
      </ul>
  )
}

const Person = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(persons.filter(x => x.name === newPerson.name).length > 0){
      return(
        window.alert(`${newName} is already added to phonebook`)  
      )
    }
    else{
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <DisplayForm newName={newName} newNumber={newNumber} addName={(event) => addName(event)} handleNameChange={(event) => handleNameChange(event)} handleNumberChange={(event) => handleNumberChange(event)} />
      <h2>Numbers</h2>
      <Display display={persons} />
    </div>
  )
}
export default App