/* TODO: Let's take the changes one step further. Change the course and its 
parts into a single JavaScript object. Fix everything that breaks. */
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
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