import React from "react"

const Courses = (coursesList) => {
    return(
      coursesList.courses.map(courses => 
        <div>
          <Course course={courses} key={courses.id}/>
        </div>
      )
    )
  }
  
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
      <p>Total number of exercises {sum}</p>
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
      course.parts.map(part => 
      <Part part={part} key={part.id}/>
      )
    )
  }
  
  
  export default Courses