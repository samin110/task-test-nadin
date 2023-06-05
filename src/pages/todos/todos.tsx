import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";

import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import TodoList from "./todo-list";

export interface TodosType {
  title: string;
  id: number;
}

const Todos = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const [isShowAddInput, setIsShowAddInput] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null!);
  const [todos, setTodos] = useState<TodosType[]>([]);

  const addInputToggle = (): void => {
    setIsShowAddInput(!isShowAddInput);
  };

  const idGenerator = (): number => {
    if (todos.length === 0) return 0;

    return todos[todos.length - 1]?.id + 1;
  };

  const addTodo = (): void | string => {
    const newTodo: string = inputRef.current?.value;

    if (newTodo === "") return toast.error("Please fill todo!!!");

    setTodos([...todos, { title: newTodo, id: idGenerator() }]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id: number): void => {
    const filteredTodos = todos.filter((todo: TodosType) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (todoSelected: TodosType) => {
    setEditId(todoSelected.id);
    inputRef.current.value = todoSelected.title;
  };

  const updateTodo = () => {
    const newTodo: string = inputRef?.current?.value;

    if (newTodo === "") return toast.error("Please fill todo!!!");

    const findIndexTodo = todos.findIndex(
      (todo: TodosType) => todo.id === editId
    );

    todos[findIndexTodo] = { title: newTodo, id: editId! };

    setTodos(todos);

    setEditId(null);

    inputRef.current.value = "";
  };

  return (
    <div className="flex justify-start  flex-col items-center bg-gray-500">
      <div className=" w-2/5 bg-white my-10 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-serif text-purple-600">TODO</h1>
          <button className="text-purple-600" onClick={addInputToggle}>
            <AddCircleIcon sx={{ fontSize: "2.5rem" }} />
          </button>
        </div>
        {isShowAddInput && (
          <>
            <input
              ref={inputRef}
              placeholder="Add todo..."
              className="p-3 w-full rounded-xl text-xl bg-gray-100 border focus:border-purple-600
               text-purple-600 outline-none mt-6 placeholder:text-purple-300"
            />
            <div className="relative">
              {editId === null ? (
                <button
                  className="absolute right-3 -top-10 "
                  type="submit"
                  onClick={addTodo}
                >
                  <SendIcon className="text-purple-500 " />
                </button>
              ) : (
                <button
                  className="absolute right-3 -top-10 "
                  type="submit"
                  onClick={updateTodo}
                >
                  <EditIcon className="text-purple-500" />
                </button>
              )}
            </div>
          </>
        )}

        {todos.length > 0 && (
          <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        )}
      </div>
    </div>
  );
};

export default Todos;
