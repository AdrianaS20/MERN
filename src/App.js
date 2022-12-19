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

  return (
    <div>
      <Header name={course}/>
      <Constant 
        p1={parts[0].name} e1={parts[0].exercises}
        p2={parts[1].name} e2={parts[1].exercises}
        p3={parts[2].name} e3={parts[2].exercises}
      />
      <Total 
        e1={parts[0].exercises}
        e2={parts[1].exercises}
        e3={parts[2].exercises}
      />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Constant = (props) => {
  return (
    <div>
      <Part part={props.p1} exercise={props.e1}/>
      <Part part={props.p2} exercise={props.e2}/>
      <Part part={props.p3} exercise={props.e3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
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