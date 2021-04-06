import React, { useState } from 'react'

const CountVote = (props) => {
  const copy = props.array
  copy[props.selected] += 1
  console.log(props.selected)
  console.log(props.array)
  return copy
}

const DisplayLargest = (props) => {
  const total = props.value.array.reduce((result,number)=> result+number);
 
  if(total === 0){
    return(
      <>
    <h2>Anecdote with most votes</h2>
    </>
    )
  }
  const maxValue = Math.max(...props.value.array)
  const maxItem = props.value.array.findIndex(element => element === maxValue);
  return(
    <>
    <h2>Anecdote with most votes</h2>
    <p>{props.anecdotes[maxItem]}</p>
    <p>has {maxValue} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [votes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))
  const [selected, setSelected] = useState(0)
  const values = {array : votes, selected: selected}

  return (

    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} vote(s)</p>
      <button onClick={() => {CountVote(values)}}>Vote</button>
      <button onClick={() => setSelected(Math.floor((Math.random() * 6) ))}>next anecdote</button>
      <DisplayLargest value={values} anecdotes={anecdotes} />
    </div>
  )
  
}

export default App