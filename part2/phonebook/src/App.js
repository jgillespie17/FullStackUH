import React, { useState } from 'react'



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
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

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