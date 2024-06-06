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

//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }
  const Content = parts.map(part =>
      <><p>{part.name} {part.exercises}</p></>
    )
    return Content;
    




  return (
    <div>
      < Header course={course}/>
      {/* <Content /> */}
      {/* < Total parts/> */}
      <p>don't forget to uncomment</p>
    </div>
  )
}

export default App