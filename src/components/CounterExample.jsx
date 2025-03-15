import React, { useEffect, useState } from 'react'

const CounterExample = () => {
  // useState - this hook is used for keeping track of a state.
  // in this case, we are keeping track of `count`
  // setCount is a function that is used to update the value of count
  // e.g setCount(5) will update the value of count to 5
  // useState(0) - this initialises the value of count to 0
  const [count, setCount] = useState(0)

  // useEffect - this hook is used to perform side effects in your components
  useEffect(() => {
    setCount(count + 1);
  }, []) // this empty array means that this effect will only run once when the component mounts
  // therefore, the count will be incremented by 1 when the component mounts, starting the count at 1

  useEffect(() => {
    console.log("count is", count)
  }, [count]) // the count variable in the dependency array means that this effect will run whenever the count changes
  // so everytime count changes, the count will be logged to the console in developer tools.

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}

export default CounterExample