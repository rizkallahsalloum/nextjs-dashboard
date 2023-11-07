import React from 'react';
import TaskList from '../components/tasksList/TaskList';
import Link from 'next/link';
import styles from '../components/tasksList/tasks.module.scss';
import pageStyles from './tasks.module.scss';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TasksPage() {
  return (
    <>
      <div className={pageStyles.tasks}>
        <div
          className={`${pageStyles.display__flex} ${pageStyles.flex__center}`}
        >
          <h3 className="component__title">Tasks</h3>
          <Link href={'/tasks'} className={pageStyles.tasks__link}>
            See All
          </Link>
        </div>

        <TaskList />
      </div>
    </>
  );
}
