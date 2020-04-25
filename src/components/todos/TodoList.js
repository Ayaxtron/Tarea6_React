import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, markAsDone, deleteTask}) => {

  const handleMarkAsDone = (event, index, id) => {
    markAsDone(index, id)
  }

  const handleDelete = (event, index, id) => {
    deleteTask(index, id);
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, i) => {
          return (
            <Todo todo={todo} task={i} markAsDone={handleMarkAsDone} hDelete={handleDelete}/ >
          )
        })}
      </tbody>
    </table>
  );

}
export default TodoList;
