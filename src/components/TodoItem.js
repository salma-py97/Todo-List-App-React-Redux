import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { useDispatch} from 'react-redux'
import { setCheck } from '../features/todo/todoSlice'



const TodoItem = ({todo}) => {

  const dispatch = useDispatch()

  // destructuring todo
  const {done, item, id} = todo
  // functions
  const handleCheck = () => {
    dispatch(setCheck(id))
  }


  return (
    <div className="todoItem">
      <p className={done && 'todoItem--done'} >{item}</p>
      {/* check box */}
      <Checkbox
        checked={done}
        onChange={handleCheck}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  )
}

export default TodoItem
