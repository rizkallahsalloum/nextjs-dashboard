'use client';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

import db from '../../../firebase';
import React, { useEffect, useState } from 'react';
import Task from './Task';
import styles from './tasks.module.scss';
import Link from 'next/link';
interface TaskItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
    setTasks(tasks.filter((task: TaskItem) => task.id !== taskId));
  };

  const toggleTask = async (taskId: string) => {
    const task = tasks.find((task: TaskItem) => task.id === taskId);
    if (!task) return;

    const updatedTask = { ...task, isCompleted: !task.isCompleted };
    await updateDoc(doc(db, 'tasks', taskId), updatedTask);
    setTasks(
      tasks.map((task: TaskItem) => (task.id === taskId ? updatedTask : task))
    );
  };

  const handleAddTaskButton = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const hideInputFieldTimer = setTimeout(() => {
      setIsVisible(false);
    }, 50000);

    return () => {
      clearTimeout(hideInputFieldTimer);
    };
  }, []);
  return (
    <>
      <div className={styles.tasks__wrapper}>
        {tasks.length === 0 ? (
          <div className={styles.tasks__no_tasks}>
            <p>There are no tasks.</p>
          </div>
        ) : (
          <div className={`${styles.tasks} pt_2`}>
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
        )}
        <form
          onClick={addTask}
          className={styles.add__task}
          style={{ display: isVisible ? 'flex' : 'none' }}
        >
          <input
            type="text"
            id="addTask"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />

          <button type="submit">Submit</button>
        </form>
        <Link
          onClick={handleAddTaskButton}
          href={'#addTask'}
          className={styles.add_new_task_btn}
        >
          Add New Task +
        </Link>
      </div>
    </>
  );
};

export default TaskList;
