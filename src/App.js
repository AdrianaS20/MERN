/* TODO: Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: Header, Content, 
and Total. All data still resides in the App component, which passes the 
necessary data to each component using props. 
Header takes care of rendering the name of the course, 
Content renders the parts and their number of exercises and 
Total renders the total number of exercises.
*/
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Constant 
        p1={part1} p2={part2} p3={part3}
        e1={exercises1} e2={exercises2} e3={exercises3}
      />
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
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

/* Refactor the Content component so that it does not render any names of parts 
or their number of exercises by itself. Instead it only renders three Part 
components of which each renders the name and number of exercises of one part.
*/
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