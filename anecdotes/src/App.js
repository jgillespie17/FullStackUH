import React, { useState } from 'react'

const CountVote = (props) => {
  const copy = props.array
  copy[props.selected] += 1
  console.log(props.selected)
  console.log(props.array)
  return copy
}
const Display = (props) => <p>has {props.value} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))
  const [selected, setSelected] = useState(0)
  const values = {array : votes, selected: selected}

  return (

    <div>
      <p>{anecdotes[selected]}</p>
      <Display value={votes[selected]}/>

      <button onClick={() => {CountVote(values)}}>Vote</button>
      <button onClick={() => setSelected(Math.floor((Math.random() * 6) ))}>next anecdote</button>
    </div>
  )
  
}

export default App