/* TODO: And then place the objects into an array. Modify the variable 
definitions of App into the following form and modify the other parts of the 
application accordingly
*/
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

/* However, do not pass different objects as separate props from the App 
component to the components Content and Total. Instead, pass them directly 
as an array:
*/
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (arr) => {
  return (
    <div>
      <Part part={arr.parts[0].name} exercise={arr.parts[0].exercises}/>
      <Part part={arr.parts[1].name} exercise={arr.parts[1].exercises}/>
      <Part part={arr.parts[2].name} exercise={arr.parts[2].exercises}/>
    </div>
  )
}

const Total = (arr) => {
  return (
    <div>
      <p>Number of exercises {arr.parts[0].exercises + arr.parts[1].exercises + 
      arr.parts[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

export default App