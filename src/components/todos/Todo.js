import React from 'react';

const Todo = ({todo, task, markAsDone, hDelete}) => {
  return(
    


    <tr key={task} style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
              <td>#{(task + 1)}</td>
              <td>{todo.description}</td>
              <td>
                {todo.status === 'pending' && (
                  <input type="button" value="terminado?" onClick={(event) => markAsDone(event, task, todo.id)}/>
                )}
                <input type="button" value="eliminar" onClick={(event) => hDelete(event, task, todo.id)}/>
              </td>
      </tr>
  )
}

export default Todo;
