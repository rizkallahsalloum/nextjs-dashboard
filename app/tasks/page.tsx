import React from 'react';
import TaskList from '../components/tasksList/TaskList';
import Link from 'next/link';
import styles from './tasks.module.scss';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TasksPage() {
  return (
    <>
      <div className={styles.tasks}>
        <div className={`${styles.display__flex} ${styles.flex__center}`}>
          <h3 className="component__title">Tasks</h3>
          <Link href={'/tasks'} className={styles.tasks__link}>
            See All
          </Link>
        </div>

        <TaskList />
      </div>
    </>
  );
}
