import React, { useState } from 'react'

const Statistics = (props) => {
  const total = props.stats.good + props.stats.bad + props.stats.neutral
  const average = (props.stats.good - props.stats.bad) / total
  const positive = ((props.stats.good) / total) * 100
  return(
    <>
    <h2>Statistics</h2>
    <p>good {props.stats.good}</p>
    <p>neutral {props.stats.neutral}</p>
    <p>bad {props.stats.bad}</p>
    <p>total {total}</p>
    <p>average {average}</p>
    <p>percent positive {positive} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const value = {good, bad, neutral}


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics stats={value}/>
    </div>
  )
}

export default App
