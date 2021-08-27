import './Input.css'
import {useState} from 'react'

const Input = () => {
  // state
  const [input, setInput] = useState("")


  // function
  const addTodo = () => {

  }


  return (
    <div className="input">
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={addTodo} >Add!</button>
    </div>
  )
}

export default Input
