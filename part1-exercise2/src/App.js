import { useState } from 'react'

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  if([props.good,props.neutral,props.bad].every((e) => e == 0))
    return (
      <>
        <table>
          <tbody>
            <tr>
            <StatisticLine text='good' value={props.good} />
            </tr>
            <tr>
            <StatisticLine text='neutral' value={props.neutral} />
            </tr>
            <tr>
            <StatisticLine text='bad' value={props.bad} />
            </tr>
            <tr>
            <StatisticLine text='all' value={all} />
            </tr>
          </tbody>
        </table>
        <p>No feedback given</p>
      </>
      )
  return (
  <>
    <table>
      <tbody>
        <tr>
        <StatisticLine text='good' value={props.good} />
        </tr>
        <tr>
        <StatisticLine text='neutral' value={props.neutral} />
        </tr>
        <tr>
        <StatisticLine text='bad' value={props.bad} />
        </tr>
        <tr>
        <StatisticLine text='all' value={all} />
        </tr>
        <tr>
        <StatisticLine text='average' value={props.good - props.bad} 
        />
        </tr>
        <tr>
        <StatisticLine text='positive' value={(props.good/
        all) * 100} afterText='%' 
        />
        </tr>
      </tbody>
    </table>
  </>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.name}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <>
      <td>{props.text}</td>
      <td>{props.value} {props.afterText}</td>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClickEvent = () => {
    setGood(good + 1)
  }

  const handleNeutralClickEvent = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClickEvent = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClickEvent} name='good' />
      <Button onClick={handleNeutralClickEvent} name='neutral' />
      <Button onClick={handleBadClickEvent} name='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
