import { useState } from 'react';
import styles from './App.module.css';
import { Header } from "./components/Header";
import { Input } from './components/Input';
import { Task } from "./components/Task";
import './global.css';

export function App() {
  const [todoList, setTodoList] = useState([])

  function onAddTask(newTask) {
    setTodoList([...todoList, newTask])
  }

  function onDeleteTask(taskDelete) {
    const newTodoList = todoList.filter(task => taskDelete.text !== task.text)

    setTodoList(newTodoList)
  }

  function onChangeTaskStatus(taskEdit) {
    const todoListClone = [...todoList]

    todoListClone.forEach(task => {
      if (task.text === taskEdit.text) {
        task.isFinished = !task.isFinished
      }
    })

    setTodoList(todoListClone)
  }


  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.wrapper}>
        <Input onAddTask={onAddTask} />
        <Task
          todoList={todoList}
          onDeleteTask={onDeleteTask}
          onChangeTaskStatus={onChangeTaskStatus}
        />
      </div>
    </div>
    
  )
}

