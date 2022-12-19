/* TODO: Let's move forward to using objects in our application. Modify the 
variable definitions of the App component as follows and also refactor the 
application so that it still works:
*/
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Constant 
        p1={part1.name} p2={part2.name} p3={part3.name}
        e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}
      />
      <Total e1={part1.exercises} e2={part2.exercises} e3={part3.exercises}/>
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