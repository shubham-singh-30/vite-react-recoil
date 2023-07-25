import { useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import React from "react";
import { filteredTodoListState } from "./recoilStore/atomFile";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListStats from "./components/TodoListStats";
import TodoListFilters from "./components/TodoListFilters";
import { AsyncExample } from "./components/AsyncExample";

function App() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AsyncExample />
      </React.Suspense>

      <h2>To Do</h2>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
