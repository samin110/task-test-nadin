import TodoItem from "./todo-item";
import type { TodosType } from "./todos";

interface TodoLidstPropsType {
  todos: TodosType[];
  editTodo: (todoSelected: TodosType) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, editTodo, deleteTodo }: TodoLidstPropsType) => {
  return (
    <>
      {todos.map((todo: TodosType) => (
        <TodoItem
          todo={todo}
          deleteTodo={deleteTodo}
          key={todo.id}
          editTodo={editTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
