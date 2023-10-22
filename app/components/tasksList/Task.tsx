'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './tasks.module.scss';

interface TaskProps {
  task: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
}
const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Check local storage for the checkbox state and set it if it exists.
    const storedState = localStorage.getItem(`checkboxState-${task.id}`);
    if (storedState) {
      setIsChecked(JSON.parse(storedState));
    }
  }, [task.id]);

  const handleCheckboxChange = (event: { target: { checked: any } }) => {
    const newState = event.target.checked;
    setIsChecked(newState);
    localStorage.setItem(`checkboxState-${task.id}`, JSON.stringify(newState));
  };
  return (
    <>
      <li className={styles.task__list_item}>
        <label>
          <input
            className={styles.ui_checkbox}
            type="checkbox"
            onClick={onToggle}
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
        <button className={styles.task__list_item_delete} onClick={onDelete}>
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
