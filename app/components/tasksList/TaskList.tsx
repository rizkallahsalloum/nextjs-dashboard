'use client';
import React, { useEffect, useState, useRef } from 'react';
import Task from './Task';
import styles from './tasks.module.scss';

interface TaskItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState(''); // Load tasks from localStorage on page load

  const initialRender = useRef(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);

      setTasks(parsedTasks); // Set tasks with the loaded data
    } else {
      setTasks([]); // Initialize the state with an empty array when no tasks are in local storage
    }
  }, []); // Save tasks to localStorage whenever a task is added or deleted

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: any) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask('');
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className={styles.tasks__wrapper}>
        <div className={`${styles.ballout} pt_2`}>
          <ul className={styles.task__list}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        </div>
        <form onClick={addTask} className={styles.add__task}>
          <input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default TaskList;
