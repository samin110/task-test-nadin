import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { TodosType } from "./todos";

interface TodoItemPropsType {
  todo: TodosType;
  editTodo: (todoSelected: TodosType) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, editTodo, deleteTodo }: TodoItemPropsType) => {
  return (
    <div
      className="w-full rounded-lg border-2 border-purple-200 bg-white p-3 shadow-xl mt-4 flex justify-between"
      key={todo.id}
    >
      <div className="flex justify-between items-center">
        <div className="bg-white">{todo.title}</div>
      </div>

      <div className="flex justify-between gap-5">
        <button
          className="hover:text-purple-700"
          onClick={() => editTodo(todo)}
        >
          <EditIcon />
        </button>

        <button
          className="hover:text-purple-700"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
