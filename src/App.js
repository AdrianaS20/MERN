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

const Constant = (props) => {
  return (
    <div>
      <p>
        {props.p1} {props.e1}
      </p>
      <p>
        {props.p2} {props.e2}
      </p>
      <p>
        {props.p3} {props.e3}
      </p>
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

export default App