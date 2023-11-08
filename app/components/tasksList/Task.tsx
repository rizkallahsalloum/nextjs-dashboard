'use client';
import { db } from '../../firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './tasks.module.scss';

interface TaskProps {
  task: {
    id: string;
    text: string;
    isCompleted: boolean;
  };
  onToggle: (task: TaskProps['task']) => void;
  onDelete: (task: TaskProps['task']) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  const handleCheckboxChange = (event: { target: { checked: any } }) => {
    const newState = event.target.checked;
    setIsChecked(newState);
    updateTask(task.id, { isCompleted: newState });
  };

  const updateTask = async (
    id: string,
    updatedFields: { isCompleted: boolean }
  ) => {
    const taskRef = doc(db, 'tasks', id);
    await updateDoc(taskRef, updatedFields);
  };
  return (
    <>
      <li className={styles.task__list_item}>
        <label>
          <input
            className={styles.ui_checkbox}
            type="checkbox"
            onClick={() => onToggle(task)}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <p
            style={{
              textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </p>
        </label>
        <button
          className={styles.task__list_item_delete}
          onClick={() => onDelete(task)}
        >
          <Image
            src="./close-square.svg"
            alt="delete "
            width={20}
            height={20}
          />
        </button>
      </li>
    </>
  );
};

export default Task;
