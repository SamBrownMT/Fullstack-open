import Course from './Course'

const App = () => {
  const courses = [{
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
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        }
      ]
    }
  ]

  var totalExercises = courses[0].parts.reduce((prev,current) => 
    prev + current.exercises,0,
  )

  return (
  <div>
    {courses.map((course) => {
      return <Course key={course.id} course={course} />
    })}
    <p>total of {totalExercises} exercises</p>
  </div>
  )
}

export default App