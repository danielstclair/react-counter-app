import React, { useState } from 'react'

function Button(props) {
  const { type = 'button', onClick, children, className = '' } = props
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

function Counter(props) {
  const { step = 1, limit, onIncrease, onDecrease } = props

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    if (!limit || limit > count) {
      const newCount = count + step
      setCount(newCount)
      onIncrease(step)
    }
  }

  const decreaseCount = () => {
    if (count) {
      const newCount = count - step
      setCount(newCount)
      onDecrease(step)
    }
  }

  const resetCount = () => {
    onDecrease(count)
    setCount(0)
  }

  return (
    <div class="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button onClick={decreaseCount}>-</Button>
          <Button onClick={increaseCount}>+</Button>
        </div>
        <Button onClick={resetCount} className="reset">
          reset
        </Button>
      </div>
    </div>
  )
}

function App() {
  const [totalCount, setTotalCount] = useState(0)

  const increaseCount = count => {
    setTotalCount(totalCount + count)
  }

  const decreaseCount = count => {
    setTotalCount(totalCount - count)
  }

  return (
    <div>
      <h1>I am the total count: {totalCount}</h1>
      <Counter
        step={5}
        limit={20}
        onIncrease={increaseCount}
        onDecrease={decreaseCount}
      />
      <Counter step={2} onIncrease={increaseCount} onDecrease={decreaseCount} />
      <Counter
        step={9}
        limit={30}
        onIncrease={increaseCount}
        onDecrease={decreaseCount}
      />
    </div>
  )
}

export default App
