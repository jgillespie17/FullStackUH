import React, { useState } from 'react'

const Statistics = (props) => {
  const total = props.stats.good + props.stats.bad + props.stats.neutral
  const average = (props.stats.good - props.stats.bad) / total
  const positive = ((props.stats.good) / total) * 100
  if (total === 0){
    return(
      <>
      <h2>Statistics</h2>
      <p>No feedback yet</p>
      </>
    )
  }
  return(
    <>
    <h2>Statistics</h2>
    <Statistic text="good" value={props.stats.good}/>
    <Statistic text="neutral" value={props.stats.neutral}/>
    <Statistic text="bad" value={props.stats.bad}/>
    <Statistic text="total" value={total}/>
    <Statistic text="average" value={average}/>
    <Statistic text="positive" value={positive} endtext="%"/>
    </>
  )
}
const Statistic = (props) => {
  return(
  <p>
    {props.text} {props.value} {props.endtext}
  </p>
  )
}

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
   {props.text}
  </button>
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
      <Button handleClick={() => setGood(good +1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics stats={value}/>
    </div>
  )
}

export default App
