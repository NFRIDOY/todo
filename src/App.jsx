import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainContainer from './components/MainContainer/MainContainer'

function App() {
  const [count, setCount] = useState(0)
  const [incomplete, setIncomplete] = useState([]);
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doings, setDoings] = useState([]);
  const [UnderReviews, setUnderReviews] = useState([]);
  const [completeds, setCompleteds] = useState([]);
  const [overDated, setOverDated] = useState([]);

  return (
    <>
      <MainContainer
        incomplete={incomplete}
        setIncomplete={setIncomplete}
        toDoTasks={toDoTasks}
        setToDoTasks={setToDoTasks}
        doings={doings}
        setDoings={setDoings}
        UnderReviews={UnderReviews}
        setUnderReviews={setUnderReviews}
        completeds={completeds} 
        setCompleteds={setCompleteds}
        overDated={overDated}
        setOverDated={setOverDated}
      ></MainContainer >
    </>
  )
}

export default App
