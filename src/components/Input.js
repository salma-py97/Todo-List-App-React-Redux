import './Input.css'
import {useState} from 'react'

// imports that will allow us to access the store
import { useDispatch} from 'react-redux'
import { saveTodo } from '../features/todo/todoSlice'



const Input = () => {
  // state
  const [input, setInput] = useState("")

  // dispatch
  const dispatch = useDispatch()
  
  // function
  const addTodo = () => {
    // when button click (dispatch action)
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))

    // clear form
    setInput("") 
  }


  return (
    <div className="input">
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={addTodo} type="submit" >Add!</button>
    </div>
  )
}

export default Input
