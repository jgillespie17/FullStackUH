import React from 'react'

const Course = ({course}) => {
  return(
  <div>
    <Header course={course}/>
    <Content course={course}/>
    <Total course={course}/>
  </div>
  )
}
const Header = ({ course }) => {
  return(
    <h1>{course.name}</h1>
  )
}


const Total = ({ course }) => {
  const sum = course.parts.reduce((result, parts)=> result + parts.exercises,0)
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return(
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return(
    course.parts.map(part => <Part part={part} key={part.id}/>)
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}
export default App