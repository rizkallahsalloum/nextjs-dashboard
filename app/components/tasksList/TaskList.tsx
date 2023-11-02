'use client';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
} from '@firebase/firestore';
import { db } from '../../firebase';
import React, { useEffect, useState, useRef } from 'react';
import Task from './Task';
import styles from './tasks.module.scss';

interface TaskItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      const tasksCol = collection(db, 'tasks');
      const tasksSnapshot = await getDocs(tasksCol);
      const tasksList = tasksSnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as TaskItem)
      );
      setTasks(tasksList);
    };

    loadTasks();
  }, []);

  const addTask = async (e: any) => {
    e.preventDefault();

    if (newTask.trim() === '') return;

    const taskItem = {
      text: newTask,
      isCompleted: false,
    };

    const docRef = await addDoc(collection(db, 'tasks'), taskItem);
    setTasks([...tasks, { id: docRef.id, ...taskItem }]);
    setNewTask('');
  };

  const deleteTask = async (taskId: string) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = async (taskId: string) => {
    const task = tasks.find((task) => task.id === taskId);
    if (!task) return;

    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    await updateDoc(doc(db, 'tasks', taskId), updatedTask);
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
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
