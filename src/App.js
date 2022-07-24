import { useState } from "react";
import TodoInput from "./Components/toDoInput";
import List from "./Components/toDoList";
import "./styles.css";

export default function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setEditEnabled] = useState(false);
  const [updatableTodo, setUpdatable] = useState(null);

  const handleChange = (e) => {
    // setting it like that because we are having only single input, in case of multiple inputs, could have used input's name.
    setInputVal(e.target.value);
  };

  const handleAddTodo = () => {
    const newArr = [...todos];
    if (inputVal) {
      newArr.push({ task: inputVal, taskId: newArr.length + 1 });
      setTodos(newArr);
    }
    setInputVal("");
  };

  const handleDelete = (id) => {
    const filteredArr = [...todos].filter((i) => i.taskId !== id);
    setTodos(filteredArr);
  };

  const handleEdit = (todo) => {
    setUpdatable(todo);
    setEditEnabled(true);
    setInputVal(todo.task);
  };

  const handleUpdateTodo = () => {
    const arrToBeUpdated = [...todos];
    const foundIndex = arrToBeUpdated.findIndex(
      (i) => i.taskId === updatableTodo.taskId
    );
    arrToBeUpdated[foundIndex] = {
      ...arrToBeUpdated[foundIndex],
      task: inputVal
    };
    setTodos(arrToBeUpdated);
    handleResetUpdate();
  };

  const handleResetUpdate = () => {
    setInputVal("");
    setEditEnabled(false);
    setUpdatable(null);
  };
  return (
    <div className="App">
      <h1>Todo List Demo</h1>
      <TodoInput
        inputVal={inputVal}
        isEdit={isEdit}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleResetUpdate={handleResetUpdate}
      />
      <List todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}
