import React from 'react'
import TodoContext from './context/TodoContext'
import Home from './pages/Home'

function App() {
  return (
    <>
      <TodoContext>
      <Home></Home>
      </TodoContext>
    </>
  )
}

export default App;