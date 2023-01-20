import './index.css'

const TodoItem = props => {
  const {TodoDetails, DeleteTodo} = props
  const {id, title} = TodoDetails

  const onClickTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li className="list-container">
      <p className="todo-heading">{title}</p>
      <button className="button" type="button" onClick={onClickTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
