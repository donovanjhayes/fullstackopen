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



  const Header = () => {
    return (
      <>
      <div>
        <h1>{course}</h1>
      </div>
      </>
    )
  }


  const Content = ()=> {
    return parts.map(part =>
      <>
      <div key = {part.name}>
      <p>{part.name} {part.exercises}</p>
      </div>
      </>
  );
}

  const Total = ()=> {
    return(
      <>
    <div> Total number of exercises: {parts[0].exercises+parts[1].exercises+parts[2].exercises}</div>
    </>
    )
  }



  return (
    <>
    <div>
      <Header course={course}/>
      <Content parts= {parts}/>
      <Total parts= {parts}/>
    </div>
    </>
  )
}

export default App
